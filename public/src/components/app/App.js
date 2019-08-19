import Component from '../Component.js';
import Header from './Header.js';
import Footer from './Footer.js';
import PokeList from './Poke-List.js';
import Search from '../options/Search.js';
import Paging from '../options/Paging.js';
import { getPokemon } from '../../../src/services/pokemon-api.js';
import hashStorage from '../../../src/services/hash-storage.js';


class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
        
        const optionsSection = dom.querySelector('.search-section');
        const search = new Search();
        optionsSection.appendChild(search.renderDOM());

        const listSection = dom.querySelector('.list-section');
        
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokeList = new PokeList({ pokemons: [] });
        listSection.appendChild(pokeList.renderDOM());

        const footer = new Footer();
        const footerDom = footer.renderDOM();
        dom.appendChild(footerDom);

        function loadQuotes() {
            const options = hashStorage.get();
            getPokemon(options)
                .then(data => {
                    const pokemonid = data.results;
                    const totalCount = data.count;

                    pokeList.update({ pokemons: pokemonid });
                    paging.update({ 
                        totalCount: totalCount,
                        currentPage: +options.page
                    });
                });
        }

        loadQuotes();
    
        window.addEventListener('hashchange', () => {
            loadQuotes();
        });
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
                                </select>
                                    <form class="search-section" >
                                        <!-- search goes here -->
                                    </form>
                                </div>
                        </div>    
                    </section>
                    <div class="list-section">
                        <!-- paging goes here -->
                        <!-- quote list goes here -->        
                    </div>
                </main>
            
        `;
    }
}

export default App;
