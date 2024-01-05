"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const multer_1 = __importDefault(require("multer"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const getUserDetails_1 = require("./controllers/getUserDetails");
const app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config();
app.use((0, helmet_1.default)({ crossOriginResourcePolicy: false, }));
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.use('/images', express_1.default.static('images'));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
(0, multer_1.default)({ storage });
app.use('/auth', authRoutes_1.default);
app.use('/products', productsRoutes_1.default);
app.get('/getUserDetails/:userId', getUserDetails_1.getUserDetails);
app.listen(process.env.PORT, () => console.log(`Server running...! ${process.env.PORT}`));
