import {useState} from 'react';

// Renderização condicional é uma forma de exibir ou apagar conteúdo de uma página com base em uma condição.
// É possível usar o state para criar condições. 

function Condicional() {
    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
    }

    function limparEmail() {
        setUserEmail("");
    }

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    return (
        <div>
            <h2>Cadastro</h2>
            <form>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
                {/* A div abaixo será exibida na página caso a condição userEmail retornar true, ou seja, caso essa variável possuir um valor. */}
                {/* O formato para a renderização condicional é: {condição && (template)} */}
                {userEmail && (
                    <div>
                        <p>O email do usuário é {userEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Condicional;