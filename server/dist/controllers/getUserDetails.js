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
exports.getUserDetails = void 0;
const dbConn_1 = __importDefault(require("../dbConn"));
const getUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const query = yield dbConn_1.default.query("SELECT email, isadmin FROM users WHERE user_id = $1", [userId]);
        if (query.rows.length === 0) {
            res.status(404).json({ msg: 'Such user does not exist' });
            return;
        }
        const userDetails = {
            userEmail: query.rows[0].email,
            userStatus: query.rows[0].isadmin,
        };
        res.status(200).json({ userDetails });
    }
    catch (err) {
        if (err instanceof Error)
            res.status(500).json({ msg: err });
    }
});
exports.getUserDetails = getUserDetails;
