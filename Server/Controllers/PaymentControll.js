const user = require("../Models/AuthModel.js");
const nodemailer = require("nodemailer");
const fs = require("fs");
const ejs = require("ejs");
const sendPaymentDeatils = async (req, res) => {
  try {
    const { email } = req.body;
    const currentUser = await user.findOne({ email: email });
    if (currentUser) {
      console.log("User found");
    }
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "ecommercewebsite29@gmail.com",
        pass: "ytnundhsrakhkdfx",
      },
    });
    const mailOptions = {
      from: "ecommercewebsite29@gmail.com",
      to: email,
      subject: "Payment Successfully",
      html: await generatePaymentMessage({email}),
    };
    async function generatePaymentMessage(email) {
      try {
        const templatePath = "./views/Payment-template.ejs";
        const template = fs.readFileSync(templatePath, "utf-8");
        const renderedTemplate = await ejs.render(template, {
          email: email,
        });
        return renderedTemplate;

      } catch (templateError) {
        console.error("Error rendering template:", templateError);
        throw templateError;
      }
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
    res.send(req.body);
  } catch (err) {
    res.send(err);
  }
};
module.exports = {
  sendPaymentDeatils,
};
