"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
const mongoose_1 = require("mongoose");
const quizSchema = new mongoose_1.Schema({
    subject: String,
    topic: String,
    questions: [{
            question: String,
            answers: [String],
            correct: String
        }]
});
exports.Quiz = mongoose_1.model("Quiz", quizSchema);
