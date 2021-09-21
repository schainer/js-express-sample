const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();


app.use(morgan('dev'));
// Express Static Middleware
app.use('/static', express.static(path.join(__dirname, 'public')));
// app.use(morgan('combined'));
app.use(cookieParser()); // res.cookie(key, value, option) && clearCookie / req.cookies => get Cookie
app.use(express.json()); // Content-Type: application/json parser
app.use(express.urlencoded({ extended: true })); // Content-Type: multipart/formData parser, file: multer


// express get-set
app.set('port', process.env.PORT || 3000);

// 간단한 Global Middleware
app.use((req, res, next) => {
  console.log('Middleware Called!');
  next();
});

app.get('/', (req, res) => {
  // res.send('hello express!')
  throw new Error('Error Occured!');
  res.sendFile(path.join(__dirname, 'resources/view/index.html'));
});

// 에러 핸들링 Middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('error occured!');
});

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
