"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.getOnSaleProducts = exports.getProductDetails = void 0;
const dbConn_1 = __importDefault(require("../dbConn"));
const getProductDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const query = yield dbConn_1.default.query(`SELECT 
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
            FROM product NATURAL JOIN product_sizes WHERE product_id = $1`, [productId]);
        if (query.rows.length === 0) {
            res.status(500).json({ msg: 'No data in database' });
            return;
        }
        const productDetails = query.rows;
        res.status(200).json(productDetails);
    }
    catch (err) {
        if (err instanceof Error)
            res.status(500).json({ msg: err });
    }
});
exports.getProductDetails = getProductDetails;
const getOnSaleProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield dbConn_1.default.query(`SELECT 
                product_id, 
                name, 
                image, 
                price, 
                sex, 
                color, 
                type,
                ROUND(CAST(price - (price * discount_percent / 100) AS numeric), 2) AS discount_price
            FROM product WHERE discount_percent IS NOT NULL`);
        if (query.rows.length === 0) {
            res.status(500).json({ msg: 'No data in database' });
            return;
        }
        const product = query.rows;
        res.status(200).json(product);
    }
    catch (err) {
        if (err instanceof Error)
            res.status(500).json({ msg: err });
    }
});
exports.getOnSaleProducts = getOnSaleProducts;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let gender = req.params.gender;
        if (gender === 'men') {
            gender = 'M';
        }
        else if (gender === 'women') {
            gender = 'F';
        }
        else {
            res.status(500).json({ msg: "Wrong parameter was passed, should be 'men' or 'women'" });
        }
        const query = yield dbConn_1.default.query(`SELECT 
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
            FROM product WHERE sex = $1`, [gender]);
        if (query.rows.length === 0) {
            res.status(500).json({ msg: 'No data in database' });
            return;
        }
        const product = query.rows;
        res.status(200).json(product);
    }
    catch (err) {
        if (err instanceof Error)
            res.status(500).json({ msg: err });
    }
});
exports.getProducts = getProducts;
