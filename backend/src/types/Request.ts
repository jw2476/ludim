import {Request as BaseRequest} from "express";
import {IUserDoc} from "../models/User";

export default interface Request extends BaseRequest {
    user?: IUserDoc
}