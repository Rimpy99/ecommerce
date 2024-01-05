import { Request, Response } from "express";
import pool from "../dbConn";

export const getUserDetails = async (req: Request, res: Response) => {
    try{
        const { userId } = req.params;
    
        const query = await pool.query(
            "SELECT email, isadmin FROM users WHERE user_id = $1",
            [userId]
        );

        if(query.rows.length === 0){
            res.status(404).json({ msg: 'Such user does not exist' });
            return;
        }

        const userDetails = {
            userEmail: query.rows[0].email,
            userStatus: query.rows[0].isadmin,
        }

        res.status(200).json({ userDetails });

    }catch(err){
        if(err instanceof Error) res.status(500).json({ msg: err });
    }

}