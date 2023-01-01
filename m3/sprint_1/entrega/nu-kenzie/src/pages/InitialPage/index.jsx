import logo from "../../assets/nu-kenzie.svg"
import art from "../../assets/illustration.svg"

export function InitialPage () {
    return (
        <div>
            <div>
                <img src={logo} alt="logo-kenzie-hub" />
                <p>Centralize o controle das suas finanças</p>
                <p>de forma rápida e segura</p>
                <a href="/homePage">Iniciar</a>
            </div>
            <img src={art} alt="art-nu-kenzie" />
        </div>
    )
}