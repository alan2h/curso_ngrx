// Acciones


/*const incrementadorAction: Action = {
    type: 'incrementar'
}*/

// usar el reducer

console.log(reducer(10, incrementadorAction));
console.log(reducer(11, decrementadorAction));
console.log(reducer(11, multiplicadorAction));
console.log(reducer(66, divisorAction));