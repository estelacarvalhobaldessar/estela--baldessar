import '../css/Header.css'
import Menu from './Menu'
import imgLinkedIn from '../img/linkedin.webp'
import imgGitHub from '../img/github.png'


function Header(){
    return(

        <header>

            <Menu/>
            <div id="home" className='header-left'>
                <div className='header-text'>
                    <div className='texto1'>
                        <p className='saudacao'>Oiê, eu sou</p>
                        <h1 className='nome'>ESTELA BALDESSAR</h1>
                        <p className='profissao'>DESENVOLVEDORA WEB</p>
                    </div>
                </div>
                <div className='apresentacao'>
                    <p>Estudante de Tecnologia da Informação, apaixonada por desenvolvimento de software e criação de soluções modernas, responsivas e eficientes.</p>
                </div>
                <div >
                    <ul className='redes'>
                        <li>
                            <a href="https://github.com/estelacarvalhobaldessar" target='_blank'>
                                <img src={imgGitHub} alt="GitHub" className='github' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/estela-baldessar/" target='blank'>
                                <img src={imgLinkedIn} alt="linkedin" className='linkEdin' />
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="mailto: ecbaldessar@gmail.com" className='botao-contato'>Contato</a>
            </div>
            
            <div className='foto'>
                
            </div>
        </header>
    )
}
export default Header;