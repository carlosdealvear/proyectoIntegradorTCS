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
                    <li>Carlos Alvear</li>
                    <li>Tomas Habib</li>
                    <li>Segundo Utariz</li>
                </ul>
            </footer>
        )
    }
}

export default Footer;