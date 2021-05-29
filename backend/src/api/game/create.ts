import type {Response} from "express";
import Request from "../../types/Request";
import {Game} from "../../models/Game"

export default async (req: Request, res: Response) => {
    const code = Math.floor(Math.random() * 1000000)
    const quiz = req.body.quiz

    const game = await new Game({
        host: req.user._id,
        players: [],
        code,
        quiz
    }).save()

    res.json(game)
}