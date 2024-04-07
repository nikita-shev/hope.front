export interface IError {
    isError: boolean;
    message: string;
}

export interface ISettings {
    length?: number;
    minLength?: number;
    maxLength?: number;
    template?: RegExp;
}
