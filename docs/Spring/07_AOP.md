# Spring

### AOP (Aspect Oriented Programming)

- 여러 객체에 공통으로 적용할 수 있는 기능을 분리해서 재사용성을 높여주는 프로그래밍 기법
- 기본 개념 : 핵심 기능에 공통 기능을 삽입
- 이를 구현하는 3가지 방법
  1. 컴파일 시점에 코드에 공통 기능을 삽입하는 방법
  2. 클래스 로딩 시점에 바이트 코드에 공통 기능을 삽입하는 방법
  3. 런타임에 프록시 객체를 생성해서 공통 기능을 삽입하는 방법
- 주요 용어
  - Advice : 언제 공통 관심 기능을 핵심 로직에 적용할 지
  - Joinpoint : Advice를 적용 가능한 지점
  - Pointcut : Joinpoint의 부분 집합으로서 실제 Advice가 적용되는 Joinpoint를 나타낸다
  - Weaving : Advice를 핵심 로직 코드에 적용하는 것
  - Aspect : 여러 객체에 공통으로 적용되는 기능

### Spring AOP 구현

- MainAspect.java

```java
public class MainAspect {
	public static void main(String[] args) {
		AnnotationConfigApplicationContext ctx =
				new AnnotationConfigApplicationContext(AppCtx.class);

		Calculator cal = ctx.getBean("calculator", Calculator.class);
		long fiveFact = cal.factorial(5);
		System.out.println("calfactorial(5) = " + fiveFact);
		System.out.println(cal.getClass().getName());
		ctx.close();
	}
}
```

- AppCtx.java

```java
@Configuration
@EnableAspectJAutoProxy
public class AppCtx {
	@Bean
	public ExeTimeAspect exeTimeAspect() {
		return new ExeTimeAspect();
	}

	@Bean
	public Calculator calculator() {
		return new RecCalculator();
	}
}
```

- ExeTimeAspect.java

```java
// Aspect -> Advice, Pointcut 제공
@Aspect
public class ExeTimeAspect {
    // 공통 기능을 적용할 대상을 설정
	@Pointcut("execution(public * chap07..*(..))")
	private void publicTarget() {}

    // Around Advice 설정
	@Around("publicTarget()")
	public Object measure(ProceedingJoinPoint joinPoint) throws Throwable {
		long start = System.nanoTime();
		try {
			Object result = joinPoint.proceed();
			return result;
		}
		finally {
			long finish = System.nanoTime();
			Signature sig  = joinPoint.getSignature();
			System.out.printf("%s.%s(%s) Execution time = %dns\n",
				joinPoint.getTarget().getClass().getSimpleName(),
				sig.getName(), Arrays.toString(joinPoint.getArgs()),
				(finish - start));
		}
	}
}
```
