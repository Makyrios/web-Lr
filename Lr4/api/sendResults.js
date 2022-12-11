const nodemailer = require('nodemailer');
module.exports.sendMsg = (req, res) => {
  const config = require('../config/config.json');
  let http = require('request')
  let reqBody = req.body
  let fields = [
    `<b>Ім'я</b>: ${reqBody.name}`,
    `<b>Група</b>: ${reqBody.group}`,
    `<b>Результат тестування</b>: ${reqBody.results}`,
    `ЛР JS2022`
  ]
  let emailMsg = `Ім'я: ${reqBody.name}\nГрупа: ${reqBody.group}\nРезультат тестування: ${reqBody.results}\nЛР JS2022`
  let msg = ''
  fields.forEach(field => {
    msg += field + '\n'
  });
  HTMLmsg = encodeURI(msg)
  // Send to telegram bot
  http.post(`https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${HTMLmsg}`, function (error, response, body) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); 
    if(response.statusCode===200){
      res.status(200).json({status: 'ok', message: 'Успешно отправлено!'});
    }
    if(response.statusCode===400){
      res.status(400).json({status: 'error', message: 'Произошла ошибка!'});
    }
  });

  // Send to email
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email.user,
      pass: config.email.pass
    },
  });

  transporter.sendMail({
    from: '"Test results"',
    to: 'webkpi21@gmail.com',
    subject: 'Test results',
    text: emailMsg,
  });
}