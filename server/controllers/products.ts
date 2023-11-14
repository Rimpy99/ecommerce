import { Request, Response } from "express";
import pool from '../dbConn';

export const getProductDetails = async (req: Request, res: Response) => {
    try{
        const productId = req.params.productId;

        const query = await pool.query(
            `SELECT 
                product_id, 
                name, 
                image, 
                price, 
                sex, 
                color, 
                type,
                ROUND(CAST(price - (price * discount_percent / 100) AS NUMERIC), 2) AS discount_price,
                xs,
                s,
                m,
                l,
                xl,
                xxl
            FROM product NATURAL JOIN product_sizes WHERE product_id = $1`,
            [productId]
        );

        if(query.rows.length === 0){
            res.status(500).json({ msg: 'No data in database' });
            return;
        }

        const productDetails = query.rows;

        res.status(200).json(productDetails);
    }catch(err){
        if(err instanceof Error) res.status(500).json({ msg: err });
    }
}

export const getOnSaleProducts = async (req: Request, res: Response) => {
    try{
        const query = await pool.query(
            `SELECT 
                product_id, 
                name, 
                image, 
                price, 
                sex, 
                color, 
                type,
                ROUND(CAST(price - (price * discount_percent / 100) AS numeric), 2) AS discount_price
            FROM product WHERE discount_percent IS NOT NULL`
        );

        if(query.rows.length === 0){
            res.status(500).json({ msg: 'No data in database' });
            return;
        }

        const product = query.rows;

        res.status(200).json(product);
    }catch(err){
        if(err instanceof Error) res.status(500).json({ msg: err });
    }
}

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
            `SELECT 
                product_id, 
                name, 
                image, 
                price, 
                sex, 
                color, 
                type,
                CASE WHEN discount_percent IS NULL THEN 
                    null
                ELSE
                    ROUND(CAST(price - (price * discount_percent / 100) AS numeric), 2)
                END AS discount_price
            FROM product WHERE sex = $1`,
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
};