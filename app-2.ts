import { Action } from './ngrx-fake/ngrx';

import { incrementadorAction, 
         decrementadorAction, 
         multiplicadorAction, 
         divisorAction } from './contador/contador.actions';
import { reducer } from './contador/contador.reducer';

 console.log(reducer(10, incrementadorAction))
 console.log(reducer(10, decrementadorAction))
 console.log(reducer(10, multiplicadorAction))
