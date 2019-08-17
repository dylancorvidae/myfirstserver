import Component from '../Component.js';

class PokeCard extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;
        return /*html*/`
        <li>
            <h2>${pokemon.pokemon}</h2>
            <img class="poke-img" src="${pokemon.url_image}" alt="${pokemon.pokemon}">
            <div>
                <h3>Type:</h3>
                <p>${pokemon.type_1}/${pokemon.type_2}</p>
            </div>
        </li>
        `;
    }
}

export default PokeCard;