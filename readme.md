Steps for expressApp
1. npm init
2. create folder server, server/controllers, tests
3. npm i -D webpack typescript tslint ts-node ts-loader
4. git init
5. add .gitignore using content of https://github.com/github/gitignore/blob/master/Node.gitignore
6. Add webpack.config.js
7. tsc --init
8. set values of tsconfig.json
9. tslint --init
10. basic setup complete. check in and tag it.
11. Add express packages
```
npm i dotenv express body-parser
npm i -D @types/body-parser @types/express @types/dotenv
```
12. Get express type lint config - https://github.com/types/express/blob/master/tslint.json
    and remove some older settings
```
git remote add github https://github.com/chesteryang/expressApp.git
git push -u github master
```