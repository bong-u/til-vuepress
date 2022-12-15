# OOD (객체지향설계)

## Dynamic dispatch and Multiple inheritance

### Polymorphism

1. Function overloading
   * using **compile time** types of arguments
2. Function overriding
   * using **runtime types** of receiver objects

### virtual function for dynamic dispatch

* dynamic dispatch를 사용하기 위한 조건
  
  1. 함수가 virtual keyword로 정의되어 있어야 한다.
  
  2. receiver object가 포인터(*), 참조(&)를 통해 refer되어야 한다
     
     ```c++
     // from parent class : Employee
     virtual std::string GetInfo() {
     return "Employee: " + name_ ;
     }
     // from child class : Developer
     std::string GetInfo() {
     return "Developer: " + name_;
     }
     ```

### ***override*** keyword

* override 키워드를 사용하는 이유
1. 직관적인 코드 

2. 개발자의 실수 방지
   
   * 컴파일러는 compile time에 다음과 같은 경우를 감지한다
     1. Overriding non-virtual functions
     2. Overriding non-existing function
* 다른 효과는 없다 단지 확인을 위한 구문

### dynamic dispatch의 원리

* VTABLE은 클래스마다 정적 array의 형태로 존재한다
* VPTR은 객체가 만들어질 때 해당 객체의 멤버변수처럼 추가된다
* 함수를 호출하면 vptr이 가리키는 vtable의 함수를 호출한다

### Abstract class

> 하나 이상의 virtual function을 가지는 클래스

* abstract class는 객체를 만들 수 없다
* pure virtual functions
  * " = 0"으로 정의 되어 몸통이 존재하지 않는 함수
  * 자식에서 구현해주지 않으면 에러 발생
* polymorphic class
  * 한 개 이상의 virtual function을 구현 또는 정의 하는 클래스
  * 부모가 되는 클래스는 destructor를 virtual하게 선언해야한다

### Multiple inheritance

* destructor 호출 순서
  
  * 상속과 반대 순서로 호출 된다
    
    ```c++
    class Developer : public Citizen, public Employee {}
    // 순서 : Developer -> Employee -> Citizen
    ```

### Diamond problem in multiple inheritance

* 여러 부모가 똑같은 이름의 멤버 변수/함수를 갖는 경우

* 자식이 사용하지 않으면 오류 X

* 사용하려고 하면 컴파일 오류 O

* 경우 1. 두 부모가 pure virtual한 공통된 함수를 갖는 경우 -> 오류X

## Design Pattern

### Three categories of design patterns

1. Creational : Factory method, Abstract factory, Builder, Prototype, Signleton

2. Structural : Adapter, Bridge, Composite, Facade, Proxy

3. Behavioral : ...
* Singleton

* Builder
  
  * builder 객체 분리
  * builder는 원래 객체의 friend (builder가 자유롭게 access 가능)

* Prototype
  
  * clone 함수는 부모에서는 pure virtual, 자식에서 구현
    
    ```c++
    Shape* Clone() const { return new Circle(color_, radius_); }
    ```

* Abstract factory
  
  * 비슷한 객체들을 만드는 공장 클래스 생성
  * 부모 가구 공장 클래스(polymorphic)
  * -> 자식 공장1(현대적 디자인), 자식 공장2(고전 디자인)

* Adapter
  
  * 서로 호환되지 않는 두 라이브러리/모듈을 연결 하기 위해 사용

* Bridge
  
  * abstract class와 이를 구현하는 class로 구성
  * abstract class를 이용해 다양한 변화에 대응

* Composite
  
  * 하나의 부모와 하위 여러 자식을 통해 Tree모양 형성
  * 객체를 만들어 부모클래스 자료형에 저장한다
  * -> 모든 자식들에 대해 일관적으로 사용 가능

* Facade
  
  * 복잡한 인터페이스들 앞에 간단한 인터페이스 생성
  * 의존적인 모듈에 업데이트가 필요하다면 해당 모듈만 업데이트 하도록 구현

* Proxy
  
  * third-party 모듈과 client 사이에 사용
  * third-party 모듈이 노출되지 않음 -> 보안 향상
  * 중간에서 입맛대로 조정 가능

## STL

STL ( Standard Template Library )

* array
  
  ```c++
  #include <array>
  std::array<int, 3> arr;
  ```

* vector : 메모리 상 데이터가 연속적이어야한다 -> random access 지원
  push_back 가능
  
  ```c++
  #include <vector>
  std::vector<int> vec;
  ```

* list : linked-list 같은 느낌, 띄엄 띄엄 있어도 연결이 된다
  push_front, push_back 가능
  begin()+4 -> XXX  
  std::next(std::next(std::next))... -> OOO
  
  ```c++
  #include <list>
  std::list<int> lst;
  ```

* deque : random access 지원, 포인터 연산 불가
  push_front 가능
  
  ```c++
  #include <deque>
  std::deque<int> deq;
  ```

* stack : LIFO
  top(), pop() 가능 
  
  ```c++
  #include <stack>
  std::stack<int> std;
  ```

* queue : FIFO
  front(), pop() 가능
  
  ```c++
  #include <queue>
  std::queue<int> que;
  ```

* set : stores unique elements following a specific order
  insert()
  
  ```c++
  #inclue <set>
  std::set<int, FunctorClass> s;
  ```

* map : stores elements as a combination of a key value and a mapped vlaue, following a specific order
  
  ```c++
  #include <map>
  std::map<std::string, int, FunctorClass> m;
  ```

## Introduction to template

Polymorphism

* Compile-time polymorphism : ex) function overloading
* Runtime polymorphism : ex) dynamic dispatch

Template을 활용한 generic programming은 compile-time polymorphism의 일종

Templates in C++

* Class template
* Function template

Templates enable developers to perform meta programming (프로그래밍을 위한 프로그래밍)

## Class template

template <(template_type var)+> class className { ... }

1. Multiple template parameters

2. Template parameter deduction (<= C++17)

3. Primitive template parameter
   
   ```c++
   template <typename T, int kSize>
   class Array { ... }
   ```

4. linking error가 발생할 수 있다
   solution 1. header파일 안에 멤버 함수들을 정의한다
   solution 2. cc파일 상단에 정의 해준다
   
   ```c++
    template <typename T, typename N>
    Pair<T, N>::Pair(T fst, N snd) : fst_(fst), snd_(snd) {}
   ```
* Function Template
1. Multiple template parameters

2. Template parameter deduction

3. Primitive template paramter

4. conflict with function overloading : 만들지 않는다

5. Template function overload resolution
   
   1. Choose exact matched one in existing functions
   2. generate an exact matched function from function Templates
   3. 만드는게 불가능 하면 원래 보통의 overload resolution

## Exception handling

### ranges of data types

```c++
#include <limits>
std::number_limits<int>::lowest()
std::number_limits<int>::min()
std::number_limits<int>::max()
```

* **lowest()와 min()의 차이점**

### handle overflow

1. Wrap around : 오버플로우 생긴 직후 값으로 제한

2. Saturation : 오버플로우 나기 직전까지로 제한

3. Exception : 개발자가 직접 예외 처리
* detection for integer overflow
  
  ```c++
  if (x > 0 && y > 0) {
  if (x > kMax - y) //overflow
  }
  if (x < 0 && y < 0) {
  if (x < kMin - y) //overflow
  }
  ```

* Wrap around for overflow
  
  ```c++
  static int WrapAroundForMax(int x, int y) {
  return kMin + (x - (kMax - y + 1));
  }
  static int WrapAroundForMin(int x, int y) {
  return kMax + (x - (kMin - y - 1));
  }
  ```

* Saturation for overflow
  
  ```c++
  static int SaturateForOverflow(int x, int y) {
  return kMax;
  }
  static int SaturateForUnderflow(int x, int y) {
  return kMin;
  }
  ```

Standard exception class hierarchy라는 것 이있다.
std::exception에 표준 예외들에 대한 hierarchy인데
catch의 match는 포함관계에 의해 이루어진다
맨위에 있는 catch문이 제일 먼저 잡는다

c style :

```c++
return -1
if (flag == 0)
  Normal
else
  Abnormal
```

C++ style :

```c++
throw WrapAroundForMax(x, y);
try {
  res = SafeMath::Add(x, 1);
  Normal
}
catch (int& res_value) {
  Abnormal
}
```

* catch block can handle only exceptions matched to the type
1. If matched, the thrown exception is assigned to the var and the statements in the catch block are executed

2. If not matched, try to match exceptions to the next catch block

3. If no catch block matched,3 jump to the next nearest catch block
* throw 하면 directly catch 문으로 점프한다

* 예외를 catch하지 못하면 runtime error를 띄운다

* catch(...) : "..."이라는 표현은 모든 종류의 예외를 잡는다

* Rethrow : catch문 안에서 throw;만 하면 다시 예외를 던져서 다른 곳에서 처리하도록 할 수 있다.

* noexcept : noexcept는 "이 함수는 예외를 발생시키지 않아요!" 라는 의미이다. 이 함수를 호출할때 이 함수의 예외를 처리할 필요가 없다

* noexcept함수에서 except를 throw하면 program은 비정상 종료를 한다

* 그 전에 컴파일 할때 warning을 띄워주기는 한다

* 다만, noexcept 함수 자체에서 발생한 exception이 아닌 noexcept함수에서 호출한 함수에서 예외가 발생한 경우
  -> 간접적으로 exception이 throw된 경우 compile warning을 띄워주지 않는다.

```c++
public NonExistFileException : public std::runtime_error {
public:
  NonExistFileException(std::string msg) : std::runtime_error(msg) {}
}
```