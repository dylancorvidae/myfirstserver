import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header>
            <img src="src/img/pokeball.png" alt="Corviknight pokemon image" class="pokeball">
            <h1>Pokedex</h1>
            <img src="src/img/pokeballflip.png" alt="Corviknight pokemon image" class="pokeball">
        </header>
        `;
    }
}

export default Header;