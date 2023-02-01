# Generics
* 효과 : 타입안정성, 간결한 코드

### Generic class
```java
public class Box<M, I> {
    private M material;
    private I item;
    ...
}

Box<Paper, String> box = new Box<Paper, String>();
```
### Generic Function
```java
public class CoffeeMachine {
    public <T> Coffee makeCoffee(T capsule) {
        return new Coffee(capsule);
    }
}
CoffeeMachine coffeeMachine = new CoffeeMachine();
Colombian capsule = new Colombian();
coffeeMachine.<Colombian>makeCoffee(capsule);
coffeeMachine.makeCoffee(capsule);
```

### Restrictions on Generics
```java
// BoxMaterial을 상속 받았으면서 Hard(인터페이스)를 구현한 클래스만 가능
public class Box<M extends BoxMaterial & Hard>
// BoxMaterial의 조상 클래스만 가능
public class Box<T super BoxMaterial>
```

### Whild Card
```java
// T와 그 자손만 가능
<? extends T>
// T와 그 조상만 가능
<? super T>
// 모두 가능
<?>
```
