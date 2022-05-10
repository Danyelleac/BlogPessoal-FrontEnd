import {Action} from './actions';
//importando action

export interface TokenState{
    tokens:string
}

//a model tera uma propriedade chamada tokens

const initialState = {
    tokens:""
}
//o estado inicial recebera  tokenvazio

export const tokenReducer=(state:TokenState =initialState, action:Action)=>{
    switch(action.type){
        case "ADD_TOKEN":{
            return{tokens:action.payload}
        }
        default:
            return state
    }
}
//aqui o meu reducer vai receber o valor inicial e o valor da action , que caso ela for do tipo add token vai retornar o valor armazenado no payload que é o token, caso não ele vai retorna o valor original