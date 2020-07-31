import { Sqlite } from '../../deps.ts';

const { DB } = Sqlite;

const db = new DB('./src/db/dev.db');

export { dex } from '../config/dex.ts'
 
export { db };