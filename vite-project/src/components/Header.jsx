import linkedin from '../img/linkedin.webp'
function Header(){
    return(
        <header>
            <h1>eu sou</h1>
            <h1>ESTELA BALDESSAR</h1>
            <h1>DESENVOLVEDORA WEB</h1>
            <ul>
                <li><a href="https://www.linkedin.com/in/estela-baldessar"><img src={linkedin} alt="" /></a></li>
                <li><a href="https://github.com/estelacarvalhobaldessar"></a></li>
            </ul>
        </header>
    )
}
export default Header;