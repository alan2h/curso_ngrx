import { Action } from '../ngrx-fake/ngrx';

export const incrementadorAction: Action = {
    type: 'incrementar'
}

export const decrementadorAction: Action = {
    type: 'decrementar'
}

export const multiplicadorAction: Action = {
    type: 'multiplicar',
    payload: 6
}

export const divisorAction: Action = {
    type: 'dividir',
    payload: 6
}
