import express from 'express';
import { getProducts, getOnSaleProducts, getProductDetails } from '../controllers/products';

const router = express.Router();

router.get('/onsale', getOnSaleProducts);
router.get('/:gender', getProducts);
router.get('/getProductDetails/:productId', getProductDetails);

export default router;