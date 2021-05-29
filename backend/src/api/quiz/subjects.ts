import type {Response} from "express";
import Request from "../../types/Request";
import {QuizSubject} from "../../common/types/Quiz";

export default (req: Request, res: Response) => {
    res.json(Object.values(QuizSubject))
}