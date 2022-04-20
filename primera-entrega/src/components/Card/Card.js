import React, {Component} from "react";
import './card.css';

class Card extends Component{
    constructor(props){
        super(props);
        this.state ={
            text: "ver más", 
            viewMore: false,            
        }
    }

viewMore(){
    if(this.state.viewMore){
        this.setState({
            text: 'ver más',
            viewMore: false,
        })
    }else{
        this.setState({
            text: 'ver menos',
            viewMore: true,
        });
        }
    }

    render(){
        console.log(this.props);
        return(
            <article className={`${this.props.orientacion}`}>
                <img src={this.props.characterInfo.album.cover_medium} alt={this.props.characterInfo.album.cover_medium} />
                <h3>{this.props.characterInfo.title}</h3>
                <p>Artist: {this.props.characterInfo.artist.name}</p>
                
                <section className={`${this.state.viewMore ? 'cardShow' : 'cardHide'}`}>
                    <p>Album: {this.props.characterInfo.album.title}</p>
                    <p>Track List: {this.props.characterInfo.album.tracklist}</p>
                    <p>ID: {this.props.characterInfo.album.id}</p>
                </section>
                <button className='more' onClick={() => this.viewMore()}>{this.state.text}</button>
                <br></br>
                <p className="delete" onClick={()=>this.props.borrar(this.props.characterInfo.id)}>Borrar</p>
                
            </article>
        ) 
    }
}

export default Card;