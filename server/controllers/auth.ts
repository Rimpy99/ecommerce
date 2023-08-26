import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import pool from '../dbConn';

export const register = async (req: Request, res: Response) => {
    try{
        const { email, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const registeredUser = await pool.query(
            "INSERT INTO users (email, password, isadmin) VALUES ($1, $2, false)",
            [email, hashedPassword]
        );

        res.status(201).json(registeredUser);
    }catch(err){
        if(err instanceof Error) res.status(500).json({ msg: err });
    }
}

export const login = async (req: Request, res: Response) => {

}