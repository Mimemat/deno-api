import { Oak } from '../../deps.ts';

const { Router } = Oak;

import { usersController } from '../controllers/UsersController.ts';

const router = new Router();

router.get('/2', ({response}) => {
  response.body = 'Hello there!';
});

router.post('/create', usersController.create)

const routes = router.routes();

export { routes };