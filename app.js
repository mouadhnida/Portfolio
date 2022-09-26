const path = require('path');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');


app.use(express.static('./public'));
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
} )

app.get('/api/form', (req,res) => {
    res.json({ data: person })
})

app.post('/api/form', (req, res) => {
    const { personName, personEmail, personMessage } = req.body;
    if(!personMessage || !personEmail ) {
        return res.status(404).send('Please provide your email and your message')
    } res.status(201).json({success: true, name: personName, email: personEmail, message: personMessage})
    async function main() {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
              user: "hnidamouad70@gmail.com",
              pass: "xbpxteouffoocftb"
          },
        });
        let info = await transporter.sendMail({
          from: personName,
          to: "hnidamouad70@gmail.com",
          subject: `from ${personEmail}`,
          text: personMessage,
          
        });
        console.log("Message sent: %s", info.messageId);
        console.log("View email: %s", nodemailer.getTestMessageUrl(info));
      }
      main().catch(console.error);
})

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server listening  ${port}`));