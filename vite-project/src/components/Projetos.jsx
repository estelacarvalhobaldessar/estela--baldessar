import '../css/projetos.css'
import imgecoleta from '../img/imgecoleta2.png'
import imgstarker from '../img/imgstarker.png'
import imgdna from '../img/imgdna2.png'

function Projetos() {
    return(
        <main className='teste'>
            <div id="projects" className="projetos">
                <p className='projetos-texto'>Projetos</p>
                <h1 className='projetos-titulo'>Meus projetos</h1>
                <p className='projetos-sobre'>Aqui estão alguns dos meus projetos de desenvolvimento web. Cada projeto foi desenvolvido com atenção aos detalhes, buscando criar interfaces intuitivas e funcionais.</p>
            </div>

            <div className='blocos-projetos'>
                <div className='bloco-projeto'>
                    <img src={imgecoleta} alt="" className='imgecoleta' />
                    <p className='titulo-projeto'>SITE ÉCOLETA</p>
                    <p className='texto-projeto'>O Cidade Conectada é um projeto desenvolvido para promover a interação entre cidadãos e a cidade por meio da tecnologia. O projeto busca apresentar uma solução digital voltada à participação e à comunicação, demonstrando na prática o desenvolvimento de uma aplicação web.
                    </p>
                </div>
                <div className='bloco-projeto'>
                    <img src={imgstarker} alt="" className='imgstarker' />
                    <p className='titulo-projeto1'>STARKER BIO-ROBOTIKS</p>
                    <p className='texto-projeto'>O Starker apresenta um produto de biorrobótica desenvolvido para auxiliar na realização de tarefas, destacando sua tecnologia, funcionalidades e aplicações de forma simples e visual.
                    </p>
                </div>
                <div className='bloco-projeto'>
                    <img src={imgdna} alt="" className='imgdna' />
                    <p className='titulo-projeto2'>DNA E RNA</p>
                    <p className='texto-projeto'>O FreeCode é uma plataforma educativa que transforma o estudo de genética em uma experiência interativa, com conteúdos sobre DNA, RNA e bases nitrogenadas, além de quizzes e jogos para testar os conhecimentos.
                    </p>
                </div>
            </div>

        </main>
    )
}
export default Projetos