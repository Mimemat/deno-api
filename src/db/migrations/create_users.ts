import { Dex } from '../../../deps.ts';

import { dexConfig } from '../../config/dex.ts';

let dex = Dex(dexConfig);


const tableQuery = dex.schema.createTable("users", (table: any) => {
    table.increments("id").primary(); 
    table.string("username", 32); 
    table.string("firstName"); 
    table.timestamps(null, true); 
}).toString();

export default tableQuery;