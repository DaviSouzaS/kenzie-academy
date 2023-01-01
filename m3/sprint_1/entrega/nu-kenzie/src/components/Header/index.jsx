import logo from "../../assets/nu-kenzie.svg"

export function Header () {
    return (
        <header>
            <div>
                <img src={logo} alt="nu-kenzie-logo" />
                <a href="/">Inicio</a>
            </div>
        </header>
    )
}