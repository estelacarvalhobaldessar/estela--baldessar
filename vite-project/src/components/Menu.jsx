import '../css/Menu.css';

function Menu() {
    return (
        <nav>
            <ul className="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#skills">Habilidades</a></li>
            </ul>
        </nav>
    );
}

export default Menu;