/*const fs = require('fs');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const crypto = require('crypto');
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');
const { applyMutationToEventStore } = require('fullcalendar');

const app = express();

const client = mysql.createConnection({
  user: 'root',
  password: 'leraedon26',
  database: 'Routinee'
})

app.use(express.static(path.join(__dirname, '/public')));

app.set('views', __dirname + '\\views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 5000);

app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
  secret: 'blackzat',
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}));

/* app.get('/', (req, res) => {
  console.log(req.session);
  if(req.session.is_logined == true) {
    res.render('index', {
      is_logined : req.session.is_logined,
      name: req.session.name
    });
  } else {
    res.render('index', {
      is_logined : false
    });
  }
}); */

/*app.get('/', (req, res) => {
  res.send('1');
})

app.get('/signup', (req, res) => {
  console.log('회원가입 페이지');
  res.render('./views/signup');
});

app.post('/signup', (req, res) => {
  console.log('회원가입 하는중');
  const body = req.body;
  const name = body.name;
  const email = body.email;
  const id = body.id;
  const pw = body.pw;

  client.query('select * from user where id=?', [id], (err, data) => {
    if(data.length == 0) {
      console.log('회원가입 성공');
      client.query('insert into user(userUniqueID, userID, userEmail, userEmailHash, userNick, userName, userPassword) values(?, ?, ?, ?, ?, ? ,?)', [
        1, id, email, 'abcd', 'User1', name, pw
      ]);
      res.redirect('/');
    } else {
      console.log('회원가입 실패');
    }
  })
})

app.listen(5000, () => {
  console.log('5000 port running..');
});*/