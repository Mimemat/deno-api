import { dex } from '../../config/dex.ts';

const tableQuery = dex.schema.createTable('users', (table: any) => {
    table.increments('id').primary(); 
    table.string('username', 32).notNullable(); 
    table.string('email').notNullable();
    table.timestamps(null, true); 
}).toString();

export default tableQuery;