import imgLinkedIn from '../img/linkedin.webp'

function Header(){
    return(
        <header>
            <h1>eu sou</h1>
            <h1>ESTELA BALDESSAR</h1>
            <h1>DESENVOLVEDORA WEB</h1>
            <ul>
                <li>
                    <a href="https://github.com/estelacarvalhobaldessar">
                        <img src="../img/githubwhite.png" alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="www.linkedin.com/in/estela-baldessar"></a>
                    <img src="{imgLinkedIn}" alt="linkedin" />
                </li>
            </ul>
        </header>
    )
}
export default Header;