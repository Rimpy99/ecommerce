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
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dbConn_1 = __importDefault(require("../dbConn"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const userInDB = yield dbConn_1.default.query("SELECT * FROM users WHERE email = $1", [email]);
        if (userInDB.rows.length !== 0) {
            res.status(400).json({ msg: 'Such user already exists' });
            return;
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        const registeredUser = yield dbConn_1.default.query("INSERT INTO users (email, password, isadmin) VALUES ($1, $2, false)", [email, hashedPassword]);
        res.status(201).json(registeredUser);
    }
    catch (err) {
        if (err instanceof Error)
            res.status(500).json({ msg: err });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const query = yield dbConn_1.default.query("SELECT user_id, password FROM users WHERE email = $1", [email]);
        const user = query.rows;
        if (user.length === 0) {
            res.status(500).json({ msg: 'Such user does not exist' });
            return;
        }
        const hashedPassword = user[0].password;
        const userId = user[0].user_id;
        const isPasswordMatching = yield bcrypt_1.default.compare(password, hashedPassword);
        if (!isPasswordMatching) {
            res.status(401).json({ msg: 'Invalid credentials' });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ userId: userId, email: email }, process.env.JWT_SECRET);
        const userInfo = {
            userId,
            email
        };
        res.status(200).json({ token, userInfo });
    }
    catch (err) {
        if (err instanceof Error)
            res.status(500).json({ msg: err });
    }
});
exports.login = login;
