import '../css/Footer.css'
import html from '../img/imghtml.png'
import css from '../img/imgcss.png'
import js from '../img/js.png'
import php from '../img/imgphp.png'
import react from '../img/imgreact.png'
import git from '../img/github.png'

function Footer() {
    return  <div className='footer'>

        <div className='footer-texto'>
            <p className='footer-titulo'>Habilidades</p>
            <p className='footer-titulo'>Aqui estão algumas das minhas habilidades em desenvolvimento web. </p>
        </div>
    <div className='linguagens'>
            <div className='img1'>
                <img src={html} alt="" className='html' />
            </div>
            <div className='img1'>
                <img src={css} alt="" className='imagens' />
            </div>
            <div className='img1'>
                <img src={js} alt="" className='imagens' />
            </div>
            <div className='img1'>
                <img src={php} alt="" className='imagens' />
            </div>
            <div className='img1'>
                <img src={react} alt="" className='imagens' />
            </div>
            <div className='img1'>
                <img src={git} alt="" className='imagens' />
            </div>
    </div>

    </div>
}

export default Footer