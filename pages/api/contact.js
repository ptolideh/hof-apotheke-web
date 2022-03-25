import nc from 'next-connect';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Source: https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645
const handler = nc().post(async (req, res) => {
  try {
    const { name, email, message, subject } = JSON.parse(req.body) || {};
    dotenv.config();
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.PROXY_EMAIL_ADDRESS,
        pass: process.env.PROXY_EMAIL_PW,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.PROXY_EMAIL_ADDRESS,
      to: process.env.MAIN_EMAIL_ADDRESS,
      subject: `Webnachricht von ${name}: ${subject}`,
      text: `${message} | Gesendet von: ${email}`,
      html: generateEmail({ name, email, subject, message }),
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.error(e);
        res.statusCode = 500;
        res.json({ data: 'something went wrong' });
      } else {
        console.log(info);
        res.statusCode = 200;
        res.json({ data: 'Email successfully sent!' });
      }
    });
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.json({ data: 'something went wrong' });
  }
});

function generateEmail({ name, subject, email, message }) {
  return `
  <table
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="vertical-align:top;"
    width="100%"
  >
    <tbody>
      <tr>
        <td style="direction:ltr;font-size:20px;padding:32px 12px 16px 12px;">
          <strong>
          [Nachricht gesendet per hofapotheke.com]
          </strong>
        <td>
      </tr>
      <tr>
        <td style="direction:ltr;font-size:0px;padding:32px 12px 16px 12px;">
          <br />
          <hr />
        <td>
      </tr>
      <tr>
        <td style="direction:ltr;padding:0px 12px 16px 12px;">
          <p style="margin-bottom:0;font-size:24px;">
            Betreff:
            <span style="font-weight:bold;">${subject}</span>
          </p>
        <td>
      </tr>
      <tr>
        <td style="direction:ltr;font-size:18px;padding:0 12px 16px 12px">
          <p >
            ${message}
          </p>
          <p>
          ---
          </p>
        <td>
      </tr>
      <tr>
        <td style="direction:ltr;font-size:18px;padding:0 12px 16px 12px;">
          <strong>Name: <span style="color: #015298">${name}</span></strong>
        <td>
      </tr>
      <tr>
        <td style="direction:ltr;font-size:18px;padding:0 12px 16px 12px;">
          <strong>Email: <span style="color: #015298">${email}</span></strong>
        <td>
      </tr>
      <tr>
        <td style="direction:ltr;font-size:0px;padding:32px 12px 16px 12px;">
          <br />
          <hr />
        <td>
      </tr>
    </tbody>
  </table>
  `;
}

export default handler;
