import  '../css/Habilidades.css'

function Habilidades() {
    return (
        <main>
            
            <div id="about" className="habilidades">
                <p className='sobre'>sobre </p>
                <h1 className='mais-sobre'>Mais sobre mim</h1>
                <p className='sobre-mim'>Tenho experiência no desenvolvimento de aplicações web utilizando HTML, CSS, JavaScript, PHP e React. Desenvolvo interfaces responsivas, intuitivas e funcionais, buscando sempre aliar um bom design à eficiência do código. Estou em constante aprendizado, aprimorando minhas habilidades e acompanhando as boas práticas do desenvolvimento web para criar soluções modernas e de qualidade.
                </p>
            </div>

            <div className='blocos'>
                <div className='bloco1'>
                    <p className='titulo'>FOCO</p>
                    <p className='texto'>Desenvolvimento Front-End e Desing.</p>
                </div>
                <div className='bloco2'>
                    <p className='titulo'>Experiência</p>
                    <p className='texto'>Tenho experiência com projetos dentro do curso, e como freelancer.</p>
                </div>
                <div className='bloco3'>
                    <p className='titulo'>Formação</p>
                    <p className='texto'>Cursando técnico informática para internet integrado ao Ensino Médio.</p>
                </div>
            </div>

        </main>
    )
}

export default Habilidades