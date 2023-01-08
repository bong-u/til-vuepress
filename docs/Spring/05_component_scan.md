### @Component scan

- Component Scan은 스프링이 직접 클래스를 검색해서 빈으로 등록해주는 기능이다

- AppCtx.java

```java
@Configuration
@ComponentScan(basePackages = {"spring"})
public class AppCtx {...}
```

- MemberInfoPrinter.java

```java
@Component("infoPrinter")
public class MemberInfoPrinter {...}
```

- 효과

```java
// before
MemberInfoPrinter infoPrinter = ctx.getBean("infoPrinter", MemberInfoPrinter.class);
// after
MemberInfoPrinter infoPrinter = ctx.getBean(MemberInfoPrinter.class);
```
