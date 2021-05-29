"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const User_1 = require("../../models/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = async (req, res) => {
    const { username } = req.body;
    let { password } = req.body;
    password = crypto_1.createHash("sha256").update(password).digest("hex");
    const user = await User_1.User.findOne({ username, password });
    if (!user) {
        res.send(403);
        return;
    }
    const token = jsonwebtoken_1.default.sign({ username }, process.env.SECRET);
    res.json({ token });
};
