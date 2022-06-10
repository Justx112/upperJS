const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('request');
    if (req.url === '/') res.end('Hello from Node.js!');
    else if (req.url === '/api/users' || req.url === '/api/users/') {
        if (req.method === 'GET') {
            fs.readFile('db.json', 'utf-8', (err, data) => {
                if (err) res.end(err);
                else res.end(data);
            });
        } else {
            res.end('Method not allowed');
        }

    } else res.end('404');
});

// http://host.domen/api/users
// http://host.domen/api/user/1236
// http://host.domen/api/user/1236/update
// http://host.domen/api/user/1236/delete

// CRUD
// http://host.domen/api/user // GET
// http://host.domen/api/user // POST
// http://host.domen/api/user // PUT
// http://host.domen/api/user // DELETE

server.listen(5555);
// const os = require('os');
// const moment = require('moment');
// const a = require('./func');
// const a = require('./func/');
// const { a } = require('./func');
// console.log(a);
// import os from 'os';

// console.log(os.type());
// console.log(os.cpus());
// console.log(moment());
// console.log(a.a(12));

// const users = [{ name: 'Vasya', age: 30 }];

// fs.writeFile('db.json', JSON.stringify(users), 'utf-8', (err) => {
//     if (err) console.log(err);
// });

// fs.readFile('db.json', 'utf-8', (err, data) => {
//     if (err) console.log(err);
//     else {
//         // console.log(data);
//         const users = JSON.parse(data);
//         // console.log(users);
//         users.push({ name: 'Ann', age: 25 });
//
//         fs.writeFile('db.json', JSON.stringify(users), 'utf-8', (err) => {
//             if (err) console.log(err);
//         });
//     }
// });
