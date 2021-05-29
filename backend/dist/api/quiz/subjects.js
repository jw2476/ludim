"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Quiz_1 = require("../../common/types/Quiz");
exports.default = (req, res) => {
    res.json(Object.values(Quiz_1.QuizSubject));
};
