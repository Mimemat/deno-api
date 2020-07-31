import { Oak } from '../deps.ts';

const { Application } = Oak;

import { routes } from './routes/index.ts';

const app = new Application();

app.use(routes);

await app.listen({ port: 8000 });