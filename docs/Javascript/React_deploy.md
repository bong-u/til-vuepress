# React_deploy

### build 결과물을 돌리면 빈 화면만 나오는 문제

1. static files 로딩에 성공했는지 확인하자
   - 문제가 있다면 index.html의 경로를 수정하자
2. react-router를 사용하고 있다면 url을 확인하자
   - deploy할때 root url이 아니라면 router에 basename을 추가해줘야한다.
   ```js
   <Router basename="/index">...</Router>
   ```
