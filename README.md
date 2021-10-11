# Realtime Chat with angular

This project was generated with angular version 12.1.2.

## installation

1. first install and config and run websocket server from https://github.com/rezanadimi72/php-websocket
2. clone project in local
3. cd in your folder
4. run `npm i` in terminal
5. change server websocket URL from this path: <src/app/services/app.service.ts> Line 30 
- for example set default url to http://localhost/php-websocket/bin/chat-server.php
6. run `ng serve`
7. open http://localhost:4200 in two browser
8. login and start realtime chat

## TODO

browser push notification
