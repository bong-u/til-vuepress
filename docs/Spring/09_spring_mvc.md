## Spring MVC 시작하기

### 프로젝트 생성
* 앞에서 만들었던 자바 애플리케이션과는 좀 다른점이 있었다
* jar이 아닌 war을 사용하는 등 여러가지 많았는데 일일이 적지는 않을 것이다

### Controller
```java
@Controller
public class HelloController {
    @GetMapping("/hello")
    public String hello(Model model,
        @RequestParam(value="name", required=false) String name) {
            model.addAttribute("greeting", "안녕하세요" + name);
            return "hello";
    }
}
```

### JSP
```jsp
<%@ page contentType="text/html; charset=utf-8" %>
<!DOCTYPE html>
<html>
    <head>
        <title>Hello</title>
    </head>
    <body>
        인사말 : ${greeting}
    </body>
</html
```

### URL접속해도 해당 jsp파일이 나오지 않는 문제
* vscode에서 community server connector라는 extension을 통해 tomcat을 띄워서 할려고 한다
* 특정 jsp를 감지했는지, serving하는지에 대한 로그가 없어 되는건지 알 수가 없다