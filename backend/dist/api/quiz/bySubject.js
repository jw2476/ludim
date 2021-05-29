"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Quiz_1 = require("../../models/Quiz");
exports.default = async (req, res) => {
    const subject = req.query.subject.toString();
    const quizzes = await Quiz_1.Quiz.find({ subject });
    res.json(quizzes);
};
