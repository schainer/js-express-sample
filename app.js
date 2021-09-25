'use strict';
require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');
const { sequelize } = require('./models');
const router = require('./routes');

const app = express();

sequelize.sync().then(() => {
  console.log('Connection is good!');
}).catch(err => {
  console.error(err);
});


app.use(morgan('dev'));
// Express Static Middleware
app.use('/static', express.static(path.join(__dirname, 'public')));
// app.use(morgan('combined'));
app.use(cookieParser()); // res.cookie(key, value, option) && clearCookie / req.cookies => get Cookie
app.use(express.json()); // Content-Type: application/json parser
app.use(express.urlencoded({ extended: true })); // Content-Type: multipart/formData parser, file: multer
app.use(session({
  secret: 'somewhat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false
  },
  name: 'session-cookie'
})); // req.session 으로 유저 고유 세션 영역 접근 가능

// Multer Upload 객체
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname) + Date.now() + ext);
    },
    limits: { fileSize: 5 * 1024 * 1024 }
  })
});

// express get-set
app.set('port', process.env.PORT || 3000);

// 간단한 Global Middleware
app.use((req, res, next) => {
  console.log('Middleware Called!');
  next();
});

router(app);

app.get('/', (req, res) => {
  // res.send('hello express!')
  // throw new Error('Error Occured!');
  res.sendFile(path.join(__dirname, 'resources/view/index.html'));
});

// single 에 넘기는 이름은 formData 의 파일 키값
// single, array, fields, none
app.post('/upload', upload.single('image'), (req, res) => {
  // req.file
});

// 에러 핸들링 Middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('error occured!');
});

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});

module.exports = app;
