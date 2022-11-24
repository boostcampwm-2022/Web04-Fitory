<div align=center><h1>📚 STACKS</h1></div>

<div align=center> 
    <h4>Common</h4>
    <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
    <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
    <h4>Front-End</h4>
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <img src="https://img.shields.io/badge/recoil-FFFFFF?style=for-the-badge&logo=recoil&logoColor=black">
    <img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
    <img src="https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black">
    <h4>Back-End</h4>
    <img src="https://img.shields.io/badge/nest.js-E0234E?style=for-the-badge&logo=Nestjs&logoColor=white">
    <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
    <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
    <img src="https://img.shields.io/badge/typeorm-F0372B?style=for-the-badge&logo=typeorm&logoColor=white">
    <h4>Server</h4>
    <img src="https://img.shields.io/badge/naver%20cloud-03C75A?style=for-the-badge&logo=naver&logoColor=white">
    <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">
    <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
    <img src="https://img.shields.io/badge/pm2-2B037A?style=for-the-badge&logo=pm2&logoColor=white">
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
