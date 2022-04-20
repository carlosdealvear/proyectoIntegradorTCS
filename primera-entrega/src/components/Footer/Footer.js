import React , {Component} from 'react';
import './Footer.css';

class Footer extends Component{
    constructor(props){
        super(props)
    
    }

    render(){
        return(
            <footer>
                <ul className="footer-team">
                    <li>Tomas Habib</li>
                    <li>Carlos de Alvear</li>
                    <li>Segundo Ustariz</li>
                </ul>
            </footer>
        )
    }
}

export default Footer;