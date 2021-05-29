import Request from "../../types/Request";
import type {Response} from "express";
import {Game} from "../../models/Game";
import sockets from "../../sockets";

export default async (req: Request, res: Response) => {
    const code = req.body.code

    const game = await Game.findOne({code}).populate("host")
    game.players.push(req.user._id)
    await game.save()

    const hostSock = sockets.get(game.host.username)
    hostSock.emit("player joined", req.user)
}