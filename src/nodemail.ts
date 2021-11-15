import mailer from 'nodemailer';
import 'dotenv/config';

const SendEmail = (name, email, message) => {
	const smtpTransport = mailer.createTransport({
		host: 'smtp.office365.com',
		port: 587,
		secure: false,
		auth: {
			user: process.env.SERVER_EMAIL,
			pass: process.env.SERVER_PASS,
		},
	});

	const mail = {
		from: 'Site Pessoal - Jean <otirbnaej@hotmail.com>',
		to: process.env.SERVER_EMAIL,
		subject: `${name} te enviou uma mensagem <${email}>`,
		text: message,
	};

	return new Promise((resolve, reject) => {
		smtpTransport
			.sendMail(mail)
			.then((response) => {
				smtpTransport.close();
				return resolve(response);
			})
			.catch((error) => {
				smtpTransport.close();
				return reject(error);
			});
	});
};

export { SendEmail };
