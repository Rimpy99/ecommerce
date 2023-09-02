"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config();
app.use((0, helmet_1.default)());
app.use('/auth', authRoutes_1.default);
app.use('/products', productsRoutes_1.default);
app.listen(process.env.PORT, () => console.log(`Server running...! ${process.env.PORT}`));
