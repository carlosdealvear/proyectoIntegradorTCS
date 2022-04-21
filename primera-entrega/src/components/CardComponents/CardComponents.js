import React, {Component} from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import './CardComponents.css';

class CardComponents extends Component{
    constructor(props){
        super(props);
        this.state={
            track:[],
            viewMore: false,
            text: "ver mas",
            trackBkp: [],
            pagina: 1,
           cargando: false,
           text:'fas fa-align-justify',
           orientacion: "tarjeta-columna",
           tracksIniciales: []
        }
    }

    componentDidMount(){
        let url ='https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10 ';
        fetch(url)
            .then(response => response.json())
            .then( data => {
                console.log(data)
                this.setState( {
                    cargando: true, 
                    track: data.data,
                    tracksIniciales: data.data,
                    trackBkp: data.data,
                    // nextPage: data.info.next,
                }, 
            )
            }  
                 )
        .catch( error => console.log(error))    
    }

    cargarMas(){
        let url = this.state.nextPage;
        fetch(url)
            .then(response => response.json())
            .then( data => this.setState(
                { 
                    track:this.state.track.concat(data.results),
                    trackBkp: this.state.trackBkp.concat(data.results),
                    nextPage:data.info.next,
                }
            ), console.log(this.state.track.length))
            .catch( error => console.log(error))
            
    }

    borrarTarjeta(id){
        let personajesFiltrados = this.state.track.filter( track => track.id !== id )

        this.setState({
            track: personajesFiltrados
        })
        console.log(this.state.track.length);
    }

    reset(){
        this.setState({
            track: this.state.trackBkp
        })
        console.log('resetenado');
        console.log(this.state.trackBkp.length);
    }
    

    orientacion() {
        if (this.state.orientacion === "tarjeta-columna") {
            this.setState({
                orientacion: "tarjeta-fila",
            })
        }
        else {
            this.setState({
                orientacion: "tarjeta-columna",
            })
        }
        

    }
    searchTrack(value){
        let tracksFiltrados = this.state.tracksIniciales.filter(track=>track.title.toLowerCase().includes(value.toLowerCase()))
        this.setState({
            track: tracksFiltrados
        })
    }

    render(){
        // console.log(this.state.Track);
        return(
            <React.Fragment> 
            <Header searchTrack={(textoAFiltrar)=>this.searchTrack(textoAFiltrar)}/>   
            <div className="tituloPagina">
            <h3>Top Tracks</h3>
            <button type="button" onClick={ ()=>this.cargarMas()}>Cargar más</button>
                <button type="button" onClick={()=>this.reset()}>Resetear borrados</button>
                <button type="button" onClick={()=>this.orientacion()}>Cambiar Orientacion</button>
                <section className="card-wrapper">    
                    { 
                        this.state.track.length === 0 ?
                        <p>Cargando...</p> :
                        this.state.track.map( (track, idx) => <Card key={idx} characterInfo={track} borrar={(pepe)=>this.borrarTarjeta(pepe)} orientacion={this.state.orientacion}/>)
                    }
                </section>
            </div>  
            </React.Fragment>
        )
    }

}

export default CardComponents