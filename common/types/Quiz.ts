export enum QuizSubject {
    ComputerScience = "Computer Science",
    Chemistry = "Chemistry"
}

export type IQuestion = {
    question: string,
    answers: [string],
    correct: string
}

export type IQuiz = {
    subject: QuizSubject,
    topic: string,
    questions: [IQuestion]
}