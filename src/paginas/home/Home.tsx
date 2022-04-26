//abaixo estou importando a bliblioteca react para o componente e o arquivo home.css
import React from "react";
import './Home.css';

//criando o componente da Home , o componente deve ter obrigatoriamente o nome do nosso arquivo
function Home(){
    return(//aqui é oque o componete retornará , é importante lembrar que um componente retorna apens 1 elemento.
    //se eu quiser retornar mais de um elemento na minha tela eu devo coloca-lo dentro de um container posso usar uma div para isso ou um fragment uma tag de abertura e fechamento
    <>
        <h1 className="titulo">Teste</h1>
        <img src="https://i.imgur.com/H88yIo2.png" alt="Rick e Morty em outro planeta" className="img" />
    </>

    );
}

//estou exportando o componente para que ele seja acessivel em outro arquivo
export default Home;