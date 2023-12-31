"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = require("../controllers/products");
const router = express_1.default.Router();
router.get('/onsale', products_1.getOnSaleProducts);
router.get('/:gender', products_1.getProducts);
router.get('/getProductDetails/:productId', products_1.getProductDetails);
exports.default = router;
