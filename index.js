const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')

app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log('Application listening on port 3000!');
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/message', (req, res) => {
  res.sendFile(`${__dirname}/message.html`);
});

// отправка данных на электронную почту

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sendmail', (req, res) => {
  console.log(req.body)
  const message = {
    to: 'sweet-ka@mail.ru',
    subject: 'Новый запрос на консультацию:',
    html: `
    имя: ${req.body.name}<br>
    телефон: ${req.body.phone}<br>
    почта: ${req.body.email}<br>
    сообщение: ${req.body.problem}
  `,
    text:
      'This <i>message</i> was sent from <strong>Node js</strong> server.',
    }
    mailer(message);
    res.redirect('/message')
})

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  secure: true,
  port: 465,
  auth: {
      user: 'sweet-ka@mail.ru',
      pass: '2zUhgyncBiVJuHqFu34T'
  }
},
{
  from: 'Запрос на консультацию <sweet-ka@mail.ru>',
});

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    // console.log(info);
  })
}
