# apollo-graphql-express-server-typescript
apollo-server-express - with typescript
# Usage
1- Clone this repository    
2- Cd to directory    
3- use NPM or Yarn to install packages
```
NPM: npm install
Yarn: yarn
```
4- Run project: start | dev | build
```
npm run start
npm run dev
npm run build
```
npm run start = node dist/app.js    
npm run dev   = nodemon src/app.ts    
npm run build = tsc -p .

# Extra
In app.ts, You can use:     
```
import typeDefs from './typeDefs'
or
const typeDefs = require('./schema')
```
If you use import typeDefs from './typeDefs' you have to make all of your schema separately    
But if you use const typeDefs = require('./schema') , you can use all of your Query,Mutation,etc in "schema.ts" file
