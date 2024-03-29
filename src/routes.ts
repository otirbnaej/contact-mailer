import { Request, Response, Router } from 'express';
import { SendEmail } from './nodemail';

const router = Router();

// router.get('/', (request, response) => {
// 	response.json({ message: 'Tudo ok' });
// });

router.post('/send', (request: Request, response: Response) => {
	const { name, email, message } = request.body;
	SendEmail({ name, email, message })
		.then((res) => response.json(res))
		.catch((error) => response.json(error));
});

export { router };
