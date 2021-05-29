"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../models/User");
const crypto_1 = require("crypto");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = async (req, res) => {
    const username = req.body.username;
    let password = req.body.password;
    const existing = await User_1.User.findOne({ username });
    if (existing) {
        res.send(403);
        return;
    }
    password = crypto_1.createHash("sha256").update(password).digest("hex"); // Hash Password
    await new User_1.User({
        username,
        password
    }).save();
    const token = jsonwebtoken_1.default.sign({ username }, process.env.SECRET);
    res.json({ token });
};
