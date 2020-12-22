import { Action, reducer } from "./ngrx-fake/ngrx";
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from "./contador/contador.actions";


class Store<I>{
    private  state: I;
    constructor(private reducer:reducer<I>, 
                state: I){
        this.state = state
    }

    getState(){
        return this.state
    }
    dispatch(action:Action){
        this.state = this.reducer(this.state, action)
    }
}


const store = new Store( contadorReducer, 10 )

store.dispatch(incrementadorAction)
store.dispatch(incrementadorAction)

console.log(store.getState())