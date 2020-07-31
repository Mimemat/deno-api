import { db } from '../index.ts';

import usersCreation from './create_users.ts';

db.query(usersCreation);
 
db.close();