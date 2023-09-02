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
exports.getProducts = void 0;
const dbConn_1 = __importDefault(require("../dbConn"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('t');
        const query = yield dbConn_1.default.query("SELECT product_id, name, image, price, sex, color, type, discount_price FROM product");
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
