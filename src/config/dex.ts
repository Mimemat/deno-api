import { Dex } from '../../deps.ts';
const dexConfig = {client: 'sqlite3', useNullAsDefault: true};
export const dex = Dex(dexConfig);
