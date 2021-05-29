import type {IGame} from "../common/types/Game";
import {Document, model, Schema} from "mongoose";

export type IGameDoc = IGame & Document

const gameSchema = new Schema({
    host: { type: Schema.Types.ObjectId, ref: "User"},
    players: [{ type: Schema.Types.ObjectId, ref: "User" }],
    code: Number,
    quiz: {type: Schema.Types.ObjectId, ref: "Quiz"}
})

export const Game = model<IGameDoc>("Game", gameSchema)