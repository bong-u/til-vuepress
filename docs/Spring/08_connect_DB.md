## DataSource 설정
* AppCtx.java
```java
    @Bean(destroyMethod = "close")
    public DataSource dataSource() {
        DataSource ds = new DataSource();
        ds.setDriverClassName("come.mysql.jdbc.Driver");
        ds.setUrl("jdbc:mysql://localhost/spring5fs?characterEncoding=utf8");
        ds.setUsername("?????");
        ds.setPassword("?????");
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
* query를 수행하는 두 방식의 차이점을 아직 잘 모르겠다.
* java.sql.SQLException: Unable to load class: come.mysql.jdbc.Driver from ... 에러 때문에 고생 중이다.