import Component from '../Component.js';
import Header from './Header.js';
import Footer from './Footer.js';
import PokeList from './Poke-List.js';
import pokemonObjects from '../data/pokemon.js';


class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDom = header.renderDOM();
        dom.prepend(headerDom);

        const props = { pokemon: pokemonObjects };
        const pokemonList = new PokeList(props);
        const pokemonListDOM = pokemonList.renderDOM();
        dom.appendChild(pokemonListDOM);

        const footer = new Footer();
        const footerDom = footer.renderDOM();
        dom.appendChild(footerDom);
    }

    renderHTML() {
        return /*HTML*/`
            
                <main>
                    <section>
                        <div id="toolball">
                            <div id="tools">
                                <label for="type">Filter by type</label>
                                <select id="type" class="type-select">
                                    <option value ="all">Show All</option>
                                    <input type="search" name="poke-search">
                                    <button>🔍</button>
                                </div>
                        </div>    
                    </section>
                </main>
            
        `;
    }
}

export default App;
