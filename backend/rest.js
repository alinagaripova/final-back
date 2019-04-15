const restify = require('restify');
const { BadRequestError, NotFoundError } = require('restify-errors');

const server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.pre((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // * - разрешаем всем
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') { // Preflight
        res.send();
        next(false);
        return;
    }

    next();
});

let dialogueList = [];
let messageList =[];
let users = [
    {id: 1, name: 'Миша', image: 'img/1.jpg'},
    {id: 2, name: 'Саша', image: 'img/2.png'},
    {id: 3, name: 'Алиса', image: 'img/3.jpg'},
    {id: 4, name: 'Миша', image: 'img/4.jpg'},
    {id: 5, name: 'Ваня', image: 'img/5.jpg'}
];

server.get('/users', (req, res, next) => { //запрос/ответ списка пользователей
    res.send(users);
    next();
});

server.get('/dialoguelist', (req, res, next) => { //запрос/ответ списка контактов
    res.send(dialogueList);
    next();
});

server.get('/messagelist', (req, res, next) => { //Запрос/ответ сообщений
    res.send(messageList);
    next();
});

server.post('/dialoguelist', (req, res, next) => { //запрос списка контактов
    dialogueList.push(req.body);
    res.send();
    next();
});

server.post('/messagelist', (req, res, next) => { //Запрос сообщений
    messageList.push(req.body);
    res.send();
    next();

});

const port = process.env.PORT || 2525;

server.listen(port, () => {
    console.log('server started');
});