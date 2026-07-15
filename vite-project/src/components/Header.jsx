import '../css/Header.css'
import imgLinkedIn from '../img/linkedin.webp'
import imgGitHub from '../img/githubwhite.png'


function Header(){
    return(
        <header>
            <div className='header-text'>
                <h1>eu sou</h1>
                <h1>ESTELA BALDESSAR</h1>
                <h1>DESENVOLVEDORA WEB</h1>
            </div>
            <ul>
                <li>
                    <a href="https://github.com/estelacarvalhobaldessar">
                        <img src={imgGitHub} alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/estela-baldessar/">
                        <img src={imgLinkedIn} alt="linkedin" />
                    </a>
                    
                </li>
            </ul>
        </header>
    )
}
export default Header;