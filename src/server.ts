import { server } from './index';

server.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
