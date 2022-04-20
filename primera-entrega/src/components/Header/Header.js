import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor: ""

        }
    }
    
    render(){
    return(
        
        <header >
                <h1 className="nombreHeader"> TCS Music</h1>
                <section className="infoHeader">
                
                    <input className="buscador" type="text" name="search" id="" placeholder="Buscar " onChange={(evento)=>this.controlarCambio(evento)} value={`${this.state.valor}`}/>
                    <button className="botonbuscador"type="submit" ><i />Buscar</button>
                    
                </section>
        </header>
        
    );
}}

export default Header;