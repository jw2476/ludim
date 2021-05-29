import type {Document} from "mongoose";
import {IQuiz} from "../common/types/Quiz";
import {model, Schema} from "mongoose";

type IQuizDoc = IQuiz & Document

const quizSchema = new Schema({
    subject: String,
    topic: String,
    questions: [{
        question: String,
        answers: [String],
        correct: String
    }]
})

export const Quiz = model<IQuizDoc>("Quiz", quizSchema)