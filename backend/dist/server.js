"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("./api"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(api_1.default);
app.use(express_1.default.static(__dirname + "/../../frontend/public"));
app.listen(8000, () => console.log("Listening on http://localhost:8000/"));
