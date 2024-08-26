type Params = 'color';

interface IParam {
    type: Params;
    value: string;
}

export interface IOption {
    title: string;
    param?: IParam;
    order?: number;
}

export interface IReturnValue {
    value: number;
    name?: string;
}
