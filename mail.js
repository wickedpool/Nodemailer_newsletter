const nodemailer = require('nodemailer')
const fs = require('fs')
const path = require('path').dirname(require.main.filename) + '/' + 'newsletter.html'

fs.readFile(path, (err, data) => {
    if (err) console.log('erreur')
  nodemailer.createTestAccount((err, account) => {
      if (err) return err
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'your@email.adress', // generated ethereal user
          pass: 'yourpassword' // generated ethereal password
        }
      })

        let mailOptions = {
          from: '"Team felicite" <atelier.felicite.paris@gmail.com>', // sender address
          to: 'receiver@email.adress', // list of receivers
          subject: 'your subject', // Subject line
          html: data // html body

        }
        transporter.sendMail(mailOptions, (error, info) => {
          if (error){
              return console.log(error);
          }
          console.log(info)
          console.log('Message sent: ' + info.response);
          });
      })
})
