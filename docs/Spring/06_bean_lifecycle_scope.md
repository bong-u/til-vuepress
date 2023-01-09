### 빈 객체의 lifecycle

1. InitializingBean, DisposableBean 상속받기

```java
public class Client implements InitializingBean, DisposableBean {
    @Override
    public void afterPropertiesSet() throws Exception {...}
    @Override
    public void destroy() throws Exception {...}
}
```

- 두 인터페이스 구현을 통해 빈 객체의 생성과 소멸에 원하는 일을 수행할 수 있다

1. Custom Method

```java
@Bean(initMethod = "connect", destroyMethod="close")
public class Client2{
    public void connect() {...}
    public void close() {...}
}
```

- 인터페이스 구현하기 싫거나 외부에서 제공받은 클래스를 사용할 때 위와 같이 구현한다

### 빈 객체의 Scope

- 기본적으로 빈 객체는 Singleton scope를 갖는다
- 하지만 임의로 Prototype scope를 갖게 할 수 있다.

```java
@Configuration
public class AppCtx {
    @Bean
    @Scope("prototype")
    public Client client() {}
}
```
