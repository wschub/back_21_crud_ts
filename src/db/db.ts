import { Pool} from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '',
    database: 'prueba_geek',
    port:5432
});