//arquivo que trará as ações

export type Action = {type:"ADD_TOKEN";payload:string};
//ação do token-utilizar o token para que ele valide nossa api-action é um objeto que terá duas propriedades(type(nome do tipo) e payload(armazenar o token) )

export const addToken = (token:string):Action =>({
    type:"ADD_TOKEN",
    payload:token,
});
//fucão vai ser do tipo action que vai ser um objeto que receber o tipo e o payload que recebera o token