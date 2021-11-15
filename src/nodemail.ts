import mailer from 'nodemailer';
import 'dotenv/config';

interface IData {
	name: string;
	email: string;
	message: string;
}

const SendEmail = ({ name, email, message }: IData) => {
	const smtpTransport = mailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
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
