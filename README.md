<div align=center><h1>📚 STACKS</h1></div>

<div class="container" style="display:flex;justify-content: space-around;">
    <div class="common" align=center>
        <h3>Common</h3>
        <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" width="100" height="auto"><br/>
        <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" width="100" height="auto"><br/>
        <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white" width="100" height="auto"><br/>
    </div>
    <div class="front-end" align=center> 
        <h3>Front-End</h3>
        <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" width="100" height="auto"><br/>
        <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ff1bb6cb-1439-4d97-a4ae-bae4be232b56/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221109T155112Z&X-Amz-Expires=86400&X-Amz-Signature=299e3ad4dbfcee610c8abb936a992578ce2834fb522c1e91874c8429b5ca8c8e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" width="100" height="auto"><br/>
        <img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" width="100" height="auto"><br/>
        <img src="https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black" width="100" height="auto"><br/>
    </div>
    <div class="back-end" align=center>
        <h3>Back-End</h3>
        <img src="https://img.shields.io/badge/nest.js-E0234E?style=for-the-badge&logo=Nestjs&logoColor=white" width="100" height="auto"><br/>
        <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white" width="100" height="auto"><br/>
        <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" width="100" height="auto"><br/>
        <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8b55b300-c5ee-4c9a-9446-781615736843/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221109T155459Z&X-Amz-Expires=86400&X-Amz-Signature=9d4dfc492bbc065dcabb1c2e8b35e84115192f5c2d75ecb8328467751e609300&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" width="100" height="auto"><br/>
    </div>
    <div class="server" align=center>
        <h3>Server</h3>
        <img src="https://img.shields.io/badge/naver%20cloud-03C75A?style=for-the-badge&logo=naver&logoColor=white" width="100" height="auto"><br/>
        <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" width="100" height="auto"><br/>
        <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" width="100" height="auto"><br/>
        <img src="https://img.shields.io/badge/pm2-2B037A?style=for-the-badge&logo=pm2&logoColor=white" width="100" height="auto"><br/>
    </div>
</div>

### 개발 디버깅

client : `npm run watch`
server : `npm run start`

### server

`package.json`

```
"scripts": {
    "start": "env $(cat .env | grep -v '#' | xargs) nodemon --watch '**/*.ts' --exec 'ts-node' app.ts",
    "mockup": "mysql -u $(cat .env | grep 'MYSQL_USER=' | sed 's/^.*=//') -p < ../fleamarket.sql && env $(cat .env | grep -v '#' | xargs) ts-node db/mockup.ts"
}
```

### client

`package.json`

```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "webpack-dev-server --open --config webpack.dev.js",
  "build": "webpack --config webpack.prod.js",
  "watch": "webpack --config webpack.dev.js --watch"
}
```
