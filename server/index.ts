import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';

import authRoutes from './routes/authRoutes';

const app = express();
app.use(express.json());
dotenv.config();
app.use(helmet());

app.use('/auth', authRoutes);

app.listen(process.env.PORT, () => console.log(`Server running...! ${process.env.PORT}`))