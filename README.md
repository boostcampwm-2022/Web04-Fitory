# webpack-boilerplate-typescript
tsconfig, eslint, webpack

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
