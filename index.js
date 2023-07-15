require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const { data } = require('./shared');

app.use(express.static(path.join(__dirname)));

app.set("view engine", "ejs");
app.set('views', `${__dirname}/views`);

app.listen(process.env.PORT || 9000, () => {
  console.log('Application listening on port!');
});

app.get('/', (req, res) => {
  res.render('index', {
    title: data.title,
    mainPhone: data.mainPhone,
    mainPhoneView: data.mainPhoneView
  });
});

app.get('/message', (req, res) => {
  res.render('message', {
    title: data.title,
    mainPhone: data.mainPhone,
    mainPhoneView: data.mainPhoneView
  });
});

// отправка данных на электронную почту

app.use(bodyParser.json());

app.post('/sendmail', (req, res) => {
    const data = req.body
    console.log(data)
  const message = {
    to: 'sweet-ka@mail.ru',
    subject: 'Новый запрос на консультацию:',
    html: `
    имя: ${data.name}<br>
    телефон: ${data.phone}<br>
    почта: ${data.email}<br>
    сообщение: ${data.problem}
  `,
    text:
      'This <i>message</i> was sent from <strong>Node js</strong> server.',
    }
    mailer(message);
    res.redirect('/message')
})

const transporter = nodemailer.createTransport({
  // host: 'smtp.gmail.com',
  // port: 587,
  // secure: false,
  service: 'Gmail',
  auth: {
      type: 'OAuth2',
      user: process.env.EMAIL,
      refreshToken: process.env.EMAIL_REFRESH_TOKEN,
      clientId: process.env.EMAIL_CLIENT_ID,
      clientSecret: process.env.EMAIL_CLIENT_SECRET
    }
},
{
  from: `Запрос на консультацию <${process.env.EMAIL}>`,
});

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    // console.log(info);
  })
}
