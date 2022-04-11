import React, {Component} from "react";
import Card from "../Card/Card";
import './styles.css';

class CharactersRyM extends Component{
    constructor(props){
        super(props);
        this.state={
            artist:[],
            viewMore: false,
            text: "ver mas",
            artistIniciales: [],
            pagina: 1,
           cargando: false,
           text:'fas fa-align-justify',
        }
    }

    //Pedir datos a la API y guardarlos en el estado
    componentDidMount(){
        let url ='https://api.deezer.com/chart/0/artists&top?limit=10';
        fetch(url)
            .then(response => response.json())
            .then( data => this.setState(
                { 
                    artist:data.results,
                    artistBkp: data.results,
                    nextPage:data.info.next,
                }, () => console.log(this.state.artist)
            ))
            .catch( error => console.log(error))
    }

    cargarMas(){
        let url = this.state.nextPage;
        fetch(url)
            .then(response => response.json())
            .then( data => this.setState(
                { 
                    artist:this.state.artist.concat(data.results),
                    artistBkp: this.state.artistBkp.concat(data.results),
                    nextPage:data.info.next,
                }
            ), console.log(this.state.artist.length))
            .catch( error => console.log(error))
            
    }

    borrarTarjeta(id){
        //Filtrar una y dejar las demás tarjetas
        let personajesFiltrados = this.state.artist.filter( Artist => Artist.id !== id )

        //Cambiar el estado
        this.setState({
            artist: personajesFiltrados
        })
        console.log(this.state.artist.length);
    }

    reset(){
        this.setState({
            artist: this.state.artistBkp
        })
        console.log('resetenado');
        console.log(this.state.artistBkp.length);
    }
    

    // Renderizar condicional "cargando..." o las tarjetas.
    // Las tarjeatas se van a renderizar usando .map            
    render(){
        // console.log(this.state.artist);
        return(
            <React.Fragment>    
                <button type="button" onClick={ ()=>this.cargarMas()}>Cargar más</button>
                <button type="button" onClick={()=>this.reset()}> Resetar borrados</button>
                <section className="card-wrapper">    
                    { 
                        this.state.artist.length === 0 ?
                        <p>Cargando...</p> :
                        this.state.artist.map( (Artist, idx) => <Card key={Artist.name + idx} characterInfo={Artist} borrar={(pepe)=>this.borrarTarjeta(pepe)}/>)
                    }
                </section>
            </React.Fragment>
        )
    }

}

export default CharactersRyM