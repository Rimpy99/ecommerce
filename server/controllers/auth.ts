import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../dbConn';

export const register = async (req: Request, res: Response) => {
    try{
        const { email, password } = req.body;

        const userInDB = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if(userInDB.rows.length !== 0){
            res.status(400).json({ msg: 'Such user already exists' });
            return;
        }

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
    try{
        const { email, password } = req.body;

        const query = await pool.query(
            "SELECT user_id, password FROM users WHERE email = $1",
            [email]
        );

        const user = query.rows;

        if(user.length ===  0){
            res.status(500).json({ msg: 'Such user does not exist' });
            return;
        }

        const hashedPassword = user[0].password;
        const userId = user[0].user_id;

        const isPasswordMatching = await bcrypt.compare(password, hashedPassword);

        if(!isPasswordMatching){
            res.status(401).json({ msg: 'Invalid credentials' });
            return;
        }

        const token = jwt.sign({ userId: userId, email: email }, process.env.JWT_SECRET);

        const userInfo = {
            userId,
            email
        };

        res.status(200).json({ token, userInfo });
    }catch(err){
        if(err instanceof Error) res.status(500).json({ msg: err }, ); 
    }
}