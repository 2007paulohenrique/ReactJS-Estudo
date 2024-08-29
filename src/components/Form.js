// useState é um hook do react que permite a manipulação do estado de um componente.
// o estado de um componente é o conjunto dos dados que este mesmo componente trabalha.
// Utilizado para consultar e alterar os valores de inputs de formulários e outros elementos.
// É necessário o import do useState para usá-lo.

import { useState } from "react";

// Os eventos são declarados dentro dos componentes em que irão ser disparados.
// Os tipos de eventos são definidos nas tags em que serão usados.

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(`Nome: ${nome}, senha: ${senha}`);
        console.log("Cadastrado!");
    }

    // O useState() retorna, em forma de lista, o valor do estado de um componente e uma função para alterá-lo.
    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
    
    return (
        <>
            <h1>Formulário</h1>
            {/* Não é necessário colocar () na chamada da função de evento. */}
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    {/* Pode ser usado em conjunto com eventos para alterar o estado de elementos do componente. */}
                    <input type="text" id="nome" name="nome" placeholder="Nome" onChange={(e) => setNome(e.target.value)}></input>
                </div>
                
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" name="senha" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}></input>
                </div>

                <button type="submit" value="Cadastrar">Cadastrar</button>
            </form>
        </>
    );
}

export default Form;