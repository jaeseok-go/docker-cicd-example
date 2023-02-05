const express = require("express");
const bodyParser = require("body-parser");

const db = require('./db');

// Express 서버 생성
const app = express();

// json 형태의 요청을 파싱하기 위한 parser 등록
app.use(bodyParser.json());

// 테이블 생성하기
// db.pool.query(
//     `CREATE TABLE LISTS (
//     id INTEGER AUTO INCREMENT,
//     value TEXT,
//     PRIMARY KEY (id))`,
//     (err, results, fields) => console.log('results', results)
// );

app.get('/api/values', function (req, res, next) {
    db.pool.query('SELECT * FROM lists',
        (err, results, fields) => err ?
            res.status(500).send(err) :
            res.json(results)
    );
})

app.post('/api/value', function (req, res, next) {
    db.pool.query('INSERT INTO lists (value) VALUES("${req.body.value}");',
        (err, results, fields) => err ?
            res.status(500).send(err) :
            res.json({ success: true, value: req.body.value })
    );
})

app.listen(5000, () => console.log('Application Start... (Port: 5000)'));