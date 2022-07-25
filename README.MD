## express 專案模板

本專案使用 express + mongodb 製作，包含基本會員註冊功能。
以下為資料夾功能說明

### controller 資料夾

- authController : 會員註冊、登入、登出功能
- userController : 取得、更新會員資料

### db 資料夾

- connect: 連接mongodb的函式。

### errors 資料夾

放各種錯誤處理的class，由index.js統一匯出。

### middleware 資料夾

- authentication: 放驗證用的middleware，有些路由需要驗證身分才能進入。
- errorHandlerMiddleware: 接收錯誤處理的 middleware。
- not-found: 找不到路由的 404 middleware。

### model 資料夾

放 User 的 model，用於操作資料庫。

### routes 資料夾

放 user 跟 auth 的路由。

### utils 資料夾

各種功能性的函式，統一由 index.js


