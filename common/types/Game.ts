import type {IUser} from "./User";
import type {IQuiz} from "./Quiz";

export type IGame = {
    host: IUser
    players: [IUser]
    code: number,
    quiz: IQuiz
}