import { Oak } from '../../deps.ts';

const { Router } = Oak;

const router = new Router();

router.get('/2', ({response}) => {
  response.body = 'Hello there!';
});

const routes = router.routes()

export { routes };