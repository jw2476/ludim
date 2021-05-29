import {Socket} from "socket.io";
import {Game} from "../models/Game";
import sockets from "../sockets";

export default (socket: Socket) => {
    socket.on("disconnect", async () => {
        const game = await Game.findOne({host: socket.data.user._id})

        if (game) {
            const players = (await game.populate("players")).players
            for (const player of players) {
                const pSocket = sockets.get(player.username)
                pSocket.emit("game over")
            }
            await game.deleteOne()
        }
    })
}