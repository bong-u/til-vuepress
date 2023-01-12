## DataSource 설정
* AppCtx.java
```java
    @Bean(destroyMethod = "close")
    public DataSource dataSource() {
        DataSource ds = new DataSource();
        ds.setDriverClassName("com.mysql.jdbc.Driver");
        ds.setUrl("jdbc:mysql://localhost/spring5fs?"+
        "enabledTLSProtocols=TLSv1.2&"+
        "useSSL=false&"+
        "characterEncoding=utf8");
        ds.setUsername("spring5");
        ds.setPassword("spring5");
        ds.setInitialSize(2);
        ds.setMaxActive(10);
        ds.setTestWhileIdle(true);
        ds.setMinEvictableIdleTimeMillis(60000 * 3);
        ds.setTimeBetweenEvictionRunsMillis(10 * 1000);
        return ds;
    }
```

## Query 실행

### JdbcTemplate을 이용한 select
```java
jdbcTemplate.query(
"select * from MEMBER where EMAIL = ?",
new RowMapper<Member>() {
    @Override
    public Member mapRow(ResultSet rs, int rowNum)
        throws SQLException {
            Member member = new Member(
                rs.getString("EMAIL"),
                rs.getString("PASSWORD"),
                rs.getString("NAME"),
                rs.getTimestamp("REGDATE").toLocalDateTime());
            member.setId(rs.getLong("ID"));
            return member;
        }
    },
    email);
```

### PreparedStatementCreater를 이용한 update
```java
jdbcTemplate.update(new PreparedStatementCreator() {
    @Override
    public PreparedStatement createPreparedStatement(Connection con)
    throws SQLException {
        PreparedStatement pstmt = con.prepareStatement(
            "insert into MEMBER (EMAIL, PASSWORD, NAME, REGDATE) values (?, ?, ?, ?)");
        pstmt.setString(1, member.getEmail());
        pstmt.setString(2, member.getPassword());
        pstmt.setString(3, member.getName());
        pstmt.setTimestamp(4, Timestamp.valueOf(member.getRegisterDateTime()));

        return pstmt;
    }
})
```
### java.sql.SQLException: Unable to load class: come.mysql.jdbc.Driver from ...
* 오류를 잘 보자... come.mysql...
* 오타로 인한 문제였다

### java.sql.SQLException: Unable to load authentication plugin 'caching_sha2_password'.
* mysql 비밀번호 인증 방식에 따른 오류이다
* 해결방법 : mysql에서 비밀번호 인증방식을 바꾸자
    ```sql
    ALTER USER '사용자'@'localhost' IDENTIFIED WITH mysql_native_password BY '비밀번호';
    ```
### javax.net.ssl.SSLHandshakeException: No appropriate protocol (protocol is disabled or cipher suites are inappropriate)
* url에 enabledTLSProtocols=TLSv1.2를 지정하여 해결할 수 있다
* url형식때문에 해결하는데 조금 시간이 걸렸다.
* 올바른 URL 형식은 아래와 같다 기억하자
    > jdbc:mysql://localhost/spring5fs?속성1=값1&속성2=값2..."

## Transaction 처리
### Transaction
> 데이터베이스의 상태를 변화시키기 위해 수행하는 **작업의 단위**
### 배경
* 쿼리 두 개를 실행하는데 만약 2번째 쿼리에서 오류가 발생했을때
* 1번째 쿼리 실행 이전 상태로 되돌리는 (롤백) 작업이 필요하다
* 이와 같이 쿼리 두 개를 묶어야 하는 상황에 Transaction을 이용한다.
* rollback 함수를 직접 호출하는 방법도 있지만, Spring에서는 @Transactional을 이용해 더 간편하게 구현할 수 있다.
  
### AppCtx.java
```java
@Bean
public PlatformTransactionManager transactionManager() {
    DataSourceTransactionManager tm = new DataSourceTransactionManager();
    tm.setDataSource(dataSource());
    return tm;
}
```

### ChangePasswordService.java
```java
@Transactional
public void changePassword(String email, String oldPwd, String newPwd) {
    Member member = memberDao.selectByEmail(email);
    
    if (member == null)
        throw new MemberNotFoundException();
    
    member.changePassword(oldPwd, newPwd);
    memberDao.update(member);
}
```
## 트랜잭션 관련 로그 메시지 출력
### logback.xml
```xml
<?xml version="1.0" encoding="UTF-8">

<configuration>
    <appender name="stdout" class="chqos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d %5p %c{2} - %m%n</pattern>
        </encoder>
    </appender>
    <root level="INFO">
        <appender-ref ref="stdout" />
    </root>

    <logger name="org.springframework.jdbc" level="DEBUG" />
</configuration>
```
* 로그 출력하는 것도 배워보았다.

## Transaction 전파
```java
public class SomeService {
    private AnyService anyService;

    @Transactional
    public void some() {
        anyService.any();
    }

    public void setAnyService(AnyService as) {
        anyService = as;
    }
}

public class AnyService {
    @Transactional
    public void any() { ... }
}
```
* some메소드가 any메소드를 호출했다. 위 코드에서는 메소드 둘 다 @Transactional이 붙어있지만 만약 붙어있지 않으면 어떻게 될까?
* 이렇게 메소드 간 호출이 발생할 때 트랜잭션이 유지되는 것을 **트랜잭션 전파**라고 한다.
  
* @Transactional annotation에 사용할 수 있는 속성 중 propagation이 트랜잭션 전파타입을 지정한다.
* 기본값 : REQUIRED : 현재 진행중인 트랜잭션이 존재하면 해당 트랜잭션 사용, 존재하지 않으면 새로운 트랜잭션을 생성한다
