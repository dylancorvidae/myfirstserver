import Component from '../Component.js';

class Footer extends Component {
    renderHTML() {
        return /*html*/`
            <footer>
                <img src="src/img/corviknight.png" alt="Corviknight pokemon image" class="corviknight">
                Created by Dylan Corvidae
                <img src="src/img/corviknightflip.png" alt="Corviknight pokemon image flipped" class="corviknight">
            </footer>
        `;
    }
}

export default Footer;