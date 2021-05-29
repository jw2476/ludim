"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = require("../../models/Game");
exports.default = async (req, res) => {
    const code = Math.floor(Math.random() * 1000000);
    const quiz = req.body.quiz;
    const game = await new Game_1.Game({
        host: req.user._id,
        players: [],
        code,
        quiz
    }).save();
    res.json(game);
};
