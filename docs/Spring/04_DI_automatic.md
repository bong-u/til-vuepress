### Maven project 만들기 복습

1. pom.xml을 만든다.
2. 프로젝트 구조를 만든다
   - 구조는 프로젝트폴더/src/main/java/패키지/클래스 이다.
3. eclipse에서 import maven project로 Maven dependencies를 인식시킨다

### @Autowired를 이용한 자동 객체 주입

- 방법1 : Field에 적용

  ```java
  public class MemberListPrinter {
      @Autowired
      private MemberDao memberDao;
      @Autowired
      private MemberPrinter printer;

      public MemberListPrinter() {}

      public void printAll() {
          Collection<Member> members = memberDao.selectAll();
          members.forEach(m -> printer.print(m));
      }
  }
  ```

- 방법2 : Method에 적용

  ```java
  public class MemberListPrinter {
      private MemberDao memberDao;
      private MemberPrinter printer;

      public MemberListPrinter() {}

      @Autowired
      public void setMemberDao(MemberDao memberDao) {
          this.memberDao = meberDao;
      }
      @Autowired
      public void setMemberPrinter(MemberPrinter memberPrinter) {
          this.printer = printer;
      }

      public void printAll() {
          Collection<Member> members = memberDao.selectAll();
          members.forEach(m -> printer.print(m));
      }
  }
  ```

- 결과
  ```java
  @Bean
  public MemberListPrinter listPrinter() {
      // 일일이 객체를 주입할 필요가 없다
      return new MemberListPrinter();
  }
  ```

### @Qualifier

- AppCtx.java
  ```java
  @Bean
  @Qualifier("printer")
  public MemberPrinter memberPrinter() {
      return new MemberPrinter();
  }
  ```
- MemberListPrinter.java
  ```java
  @Autowired
  @Qualifier("printer")
  private MemberPrinter printer;
  ```
- 자동 주입 가능한 빈이 두 개 이상일 때 특정 빈을 한정하기 위해 사용한다
- 필드, 메소드 둘 다 사용 가능하다
- @Qualifier annotation이 없으면 빈의 이름을 한정자로 지정한다

### @Autowired의 필수 여부를 지정하는 방법

- 의존 객체를 꼭 주입할 필요가 없는 경우가 있다
- 아래의 세 방법은 필드에도 적용 가능하다

1. required=false
   ```java
   @Autowired(required = false)
   public void setDateFormatter(DateTimeForMatter formatterOpt) {...}
   ```
   - 일치하는 빈이 없으면 할당을 자체를 하지 않음
2. Optional
   ```java
   @Autowired()
   public void setDateFormatter(Optional<DateTimeFormatter> formatterOpt) {
   	if (formatterOpt.isPresent()) {
   		this.dateTimeFormatter = formatterOpt.get();
   	}
   	else {
   		this.dateTimeFormatter = null;
   	}
   }
   ```
   - 일치하는 빈이 없으면 값이 없는 Optional을 할당
3. @Nullable
   ```java
   @Autowired
   public void setDateFormatter(@Nullable DateTiemFormatter formatterOpt) {...}
   ```
   - 일치하는 빈이 없으면 null값을 전달

### 자동 주입, 명시적 의존 주입

- **둘 다 수행한 경우 자동 주입**을 통해 빈을 주입한다
- 자동 주입, 명시적 수동 주입을 섞어서 사용하지 말자
