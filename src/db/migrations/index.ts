import { Sqlite } from '../../../deps.ts';

const { DB } = Sqlite;

import usersCreation from './create_users.ts';

const db = new DB('./src/db/dev.db');

db.query(usersCreation);

export default db;