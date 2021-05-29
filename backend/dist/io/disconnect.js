"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = require("../models/Game");
const sockets_1 = __importDefault(require("../sockets"));
exports.default = (socket) => {
    socket.on("disconnect", async () => {
        const game = await Game_1.Game.findOne({ host: socket.data.user._id });
        if (game) {
            const players = (await game.populate("players")).players;
            for (const player of players) {
                const pSocket = sockets_1.default.get(player.username);
                pSocket.emit("game over");
            }
            await game.deleteOne();
        }
    });
};
