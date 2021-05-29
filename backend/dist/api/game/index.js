"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_1 = __importDefault(require("./create"));
const join_1 = __importDefault(require("./join"));
const router = express_1.Router();
router.post("/", create_1.default);
router.post("/join", join_1.default);
exports.default = router;
