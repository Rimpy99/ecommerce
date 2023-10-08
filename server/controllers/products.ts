import { Request, Response } from "express";
import pool from '../dbConn';

export const getProducts = async (req: Request, res: Response) => {
    try{
        let gender = req.params.gender;
        
        if(gender === 'men'){
            gender = 'M'
        }else if(gender === 'women'){
            gender = 'F'
        }else{
            res.status(500).json({ msg: "Wrong parameter was passed, should be 'men' or 'women'" });
        }

        const query = await pool.query(
            "SELECT product_id, name, image, price, sex, color, type, discount_price FROM product WHERE sex = $1",
            [gender]
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