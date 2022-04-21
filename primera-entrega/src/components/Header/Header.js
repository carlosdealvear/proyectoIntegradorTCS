import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor: ""

        }
    }

    evitarSubmit(evento){
        evento.preventDefault();
    }
    controlarCambios(cambios){
        this.setState({
            valor: cambios.target.value
        }, () => this.props.searchTrack(this.state.valor))
        
    }
    render(){
    
    return(
        
        <header >
                <h1 className="nombreHeader"> TCS Music</h1>
                <section className="infoHeader">
                <form onSubmit={(evento)=>this.evitarSubmit(evento)}> 
                    <input className="buscador" type="text" name="search" id="" placeholder="Buscar" onChange ={(cambioEvento)=> this.controlarCambios(cambioEvento)} 
                value={this.state.valor}/>
                    <button className="botonbuscador"type="submit" ><i />Buscar</button>
                </form>    
                </section>
        </header>
        
    );
}}

export default Header;