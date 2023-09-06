import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import multer from 'multer';

import authRoutes from './routes/authRoutes';
import productsRoutes from './routes/productsRoutes';

const app = express();
app.use(express.json());
dotenv.config();
app.use(helmet({crossOriginResourcePolicy: false,}));
app.use(cors())
app.use(express.static('public'));

app.use('/images', express.static('images'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

multer({ storage })

app.use('/auth', authRoutes);
app.use('/products', productsRoutes);

app.listen(process.env.PORT, () => console.log(`Server running...! ${process.env.PORT}`))