"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const mongoose_1 = require("mongoose");
const gameSchema = new mongoose_1.Schema({
    host: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    players: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
    code: Number,
    quiz: { type: mongoose_1.Schema.Types.ObjectId, ref: "Quiz" }
});
exports.Game = mongoose_1.model("Game", gameSchema);
