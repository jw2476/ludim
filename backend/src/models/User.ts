import type {Document} from "mongoose"
import {model, Schema} from "mongoose";
import {IUser, IClass} from "../common/types/User";

export type IUserDoc = IUser & Document

const userSchema = new Schema({
    username: String,
    password: String,
    currentClass: Object
})

export const User = model<IUserDoc>("User", userSchema)
