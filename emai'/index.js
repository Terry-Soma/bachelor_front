const apikey = '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'
var SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = apikey;

// https://ikhzasag.edu.mn/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=1920&q=75
const htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ИЗОУИС</title>
  <style>
    * {
      box-sizing: border-box;
    }

    .container {
      margin: 0 auto;
      background-color: antiquewhite;
    }

    .center {
      text-align: center;
    }

    .img {
      margin: 0 auto;
      text-align: center;
    }

    img {
      max-width: 100%;
    }

    h1 {
      margin-top: 20px;
    }

    .personal__information {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }

    table {
      width: 100%;
      max-width: 600px;
      border-collapse: collapse;
      margin: 0 auto;
    }

    th,
    td {
      border: 1px solid grey;
      padding: 8px;
      text-align: left;
    }

    footer {
      background-color: #3532cd;
      color: #fff;
      text-align: center;
      padding: 20px;
    }

    hr {
      background-color: white;
      width: 70%;
      margin: 20px auto;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="center">
      <div class="img">
        <img src="https://ikhzasag.edu.mn/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=1920&q=75" alt="" height="120" width="120">
      </div>
      <h1>Их засаг олон улсын сургууль</h1>
      <h1>ИЗОУИС</h1>
      <div class="personal__information">
        <h4>Lorem ipsum овогтой Lorem, ipsum. таньд энэ өдрийн мэнд хүргэе</h4>
        <div class="choosed__study">
          <h5>Таны сонгосон мэргэжлүүд</h5>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Сургуулийн нэр</th>
                <th>Мэргэжлийн нэр</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ИХ ЗАСАГ ХУУЛЬ ЗҮЙН СУРГУУЛЬ</td>
                <td>Эрх зүй /Өдөр/</td>
              </tr>
              <tr>
                <td>2</td>
                <td>ИХ ЗАСАГ ХУУЛЬ ЗҮЙН СУРГУУЛЬ</td>
                <td>Эрх зүй /Өдөр/</td>
              </tr>
              <tr>
                <td>3</td>
                <td>ИХ ЗАСАГ ХУУЛЬ ЗҮЙН СУРГУУЛЬ</td>
                <td>Эрх зүй /Өдөр/</td>
              </tr>
              <tr>
                <td>4</td>
                <td>ИХ ЗАСАГ ХУУЛЬ ЗҮЙН СУРГУУЛЬ</td>
                <td>Эрх зүй /Өдөр/</td>
              </tr>
              <tr>
                <td>5</td>
                <td>ИХ ЗАСАГ ХУУЛЬ ЗҮЙН СУРГУУЛЬ</td>
                <td>Эрх зүй /Өдөр/</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <footer style="margin-top:30px">
        <p>ИЗОУИС-ийг сонгосон таньд баярлалаа</p>
        <p>Монгол Улс Улаанбаатар хот. Баянзүрх дүүрэг, 4 дүгээр хороо, Б.Доржийн гудамж, Их Засаг цогцолбор</p>
        <p>Бидэнтэй холбогдох утас | (976) 70157768, 7015-7761, 7015-7765</p>
        <hr>
      </footer>
    </div>
  </div>
</body>

</html>

`
new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({

  "sender": { "email": "Jakleito70@gmail.com", "name": "Jargalsaikhan" },
  "subject": "Их засаг олон улсын их сургууль",
  "htmlContent": `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>My Email</title>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
    </style>
  </head>
  <body>
    <table cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td align="center">
          <h1>Welcome to My Website!</h1>
          <p>This is a paragraph of text.</p>
          <img src="image.jpg" alt="My Image" style="max-width: 100%;">
        </td>
      </tr>
    </table>
  </body>
  </html>`,
  "params": {
    "greeting": "This is the default greeting",
    "headline": "This is the default headline"
  },
  "messageVersions": [
    //Definition for Message Version 1 
    {
      "to": [
        {
          "email": "jakleito70@gmail.com",
          "name": "mr jak"
        },
        {
          "email": "anhaabaatar1214@gmail.com",
          "name": "Anhaabaatar"
        }
      ],
      "htmlContent": htmlContent,
      "subject": "Таны бүртгэлийн мэдээллийг баталгаажууллаа."
    },

    // Definition for Message Version 2
  ]

}).then(function (data) {
  console.log(data);
}, function (error) {
  console.error(error);
});