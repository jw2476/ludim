"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const game_1 = __importDefault(require("./game"));
const quiz_1 = __importDefault(require("./quiz"));
const router = express_1.Router();
router.use("/auth", auth_1.default);
router.use("/game", game_1.default);
router.use("/quiz", quiz_1.default);
exports.default = router;
