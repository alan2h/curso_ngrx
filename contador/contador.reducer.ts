import { Action } from '../ngrx-fake/ngrx';

export function contadorReducer(state = 10, action:Action){
    switch(action.type){
        case 'incrementar':
            return state +=1
         case 'decrementar':
             return state +=1
         case 'multiplicar':
             return state *= action.payload
         case 'dividir':
             return state /= action.payload
         default:
             return state
    }
 }
 