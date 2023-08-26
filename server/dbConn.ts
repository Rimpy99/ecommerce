import { Pool } from 'pg';

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432
});

const connect = async () => {
    try{
        await pool.connect()
    }catch(err){
        console.log(err);
    }
};

connect();