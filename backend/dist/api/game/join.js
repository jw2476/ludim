"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = require("../../models/Game");
const sockets_1 = __importDefault(require("../../sockets"));
exports.default = async (req, res) => {
    const code = req.body.code;
    const game = await Game_1.Game.findOne({ code }).populate("host");
    game.players.push(req.user._id);
    await game.save();
    const hostSock = sockets_1.default.get(game.host.username);
    hostSock.emit("player joined", req.user);
};
