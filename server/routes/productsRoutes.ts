import express from 'express';
import { getProducts, getOnSaleProducts } from '../controllers/products';

const router = express.Router();

router.get('/onsale', getOnSaleProducts);
router.get('/:gender', getProducts);

export default router;