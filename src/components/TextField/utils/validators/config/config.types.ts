export interface IError {
    isError: boolean;
    message: string;
}

export interface ISettings {
    minLength?: number;
    maxLength?: number;
    template?: RegExp;
}
