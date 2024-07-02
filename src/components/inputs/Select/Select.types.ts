type Params = 'color';

interface IParam {
    type: Params;
    value: string;
}

export interface IOption {
    title: string;
    param?: IParam;
}
