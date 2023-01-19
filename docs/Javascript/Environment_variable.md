# Environment_variable

* 프로그램이 개발/배포 상황에 따라 변수를 달리해야 할 때가 있다.
* 이때 react에서는 .env.development , .env.production 파일을 만들어서 환경변수를 쉽게 관리할 수 있다.
* react는 앞에 **'REACT_APP'** 을 붙여야 인식이 된다고한다.


### 설정
* .env.development
    ```text
    REACT_APP_HOST=localhost
    ```
* .env.production
    ```text
    REACT_APP_HOST=192.168.0.1
    ```

### 사용
```js
${process.env.REACT_APP_HOST}
```