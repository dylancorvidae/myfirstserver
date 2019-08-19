import Component from '../Component.js';
import PokeCard from './Poke-Card.js';

class PokeList extends Component {

    onRender(dom) {
        const pokemons = this.props.pokemons.results;

        if(pokemons) {
            pokemons.forEach(pokemon => {
                const props = { pokemon: pokemon };
                const pokemonCard = new PokeCard(props);
                const pokemonCardDOM = pokemonCard.renderDOM();
                dom.appendChild(pokemonCardDOM);
            
            });
        }
    }

    renderHTML() {
        return /*html*/`
        <ul class="poke-list"></ul>
        `;
    }
}

export default PokeList;