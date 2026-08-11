import '../css/projetos.css'
import imgecoleta from '../img/imgécoleta (2).png'
import imgstarker from '../img/imgstarker.png'

function Projetos() {
    return(
        <main className='teste'>
            <div id="projetos" className="projetos">
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
                    <p className='titulo-projeto'>Projeto 2</p>
                    <p className='texto-projeto'>Descrição do projeto 2.</p>
                </div>
                <div className='bloco-projeto'>
                    <p className='titulo-projeto'>Projeto 3</p>
                    <p className='texto-projeto'>Descrição do projeto 3.</p>
                </div>
            </div>

        </main>
    )
}
export default Projetos