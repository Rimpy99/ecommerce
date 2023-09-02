import { Request, Response } from "express";
import pool from '../dbConn';

export const getProducts = async (req: Request, res: Response) => {
    try{
        console.log('t')
        const query = await pool.query(
            "SELECT product_id, name, image, price, sex, color, type, discount_price FROM product"
        );

        if(query.rows.length === 0){
            res.status(500).json({ msg: 'No data in database' });
            return;
        }

        const product = query.rows;

        res.status(200).json(product)

    }catch(err){
        if(err instanceof Error) res.status(500).json({ msg: err });
    }
}