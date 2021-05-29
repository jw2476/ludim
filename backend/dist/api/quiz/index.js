"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subjects_1 = __importDefault(require("./subjects"));
const bySubject_1 = __importDefault(require("./bySubject"));
const router = express_1.Router();
router.get("/bySubject", bySubject_1.default);
router.get("/subjects", subjects_1.default);
exports.default = router;
