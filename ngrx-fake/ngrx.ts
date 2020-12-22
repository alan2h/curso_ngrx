
export interface Action {
    type: string;
    payload?: any;
}

export interface reducer<I> {
    ( state:I, action:Action ): I
}