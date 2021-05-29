import type {Response} from "express";
import Request from "../../types/Request";
import {Quiz} from "../../models/Quiz";
import {QuizSubject} from "../../common/types/Quiz";

export default async (req: Request, res: Response) => {
    const subject = req.query.subject.toString() as QuizSubject

    const quizzes = await Quiz.find({subject})
    res.json(quizzes)
}