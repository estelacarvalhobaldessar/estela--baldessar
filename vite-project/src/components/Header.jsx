import '../css/Header.css'
import imgLinkedIn from '../img/linkedin.webp'
import imgGitHub from '../img/github.png'


function Header(){
    return(
        <header>
            <div className='header-text'>
                <div className='texto1'>
                    <h1>eu sou</h1>
                    <h1>ESTELA BALDESSAR</h1>
                    <h1>DESENVOLVEDORA WEB</h1>
                </div>
            </div>
            <div className='apresentacao'>
                <p>Estudante de Tecnologia da Informação, apaixonada por desenvolvimento de software e criação de soluções modernas, responsivas e eficientes.</p>
            </div>
            <div >
                <ul className='redes'>
                    <li>
                        <a href="https://github.com/estelacarvalhobaldessar" >
                            <img src={imgGitHub} alt="GitHub" className='github' />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/estela-baldessar/">
                            <img src={imgLinkedIn} alt="linkedin" className='linkEdin' />
                        </a>
                        
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;