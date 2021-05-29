export enum ClassNames {
    Paladin = "Paladin",
    Wizard = "Wizard",
    Warrior = "Warrior"
}

export type IClass = {
    name: ClassNames
}

export type IUser = {
    username: string
    password: string
    currentClass?: IClass
}