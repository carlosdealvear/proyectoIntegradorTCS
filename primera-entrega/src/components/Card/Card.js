import React, {Component} from "react";
import './card.css';

class Card extends Component{
    constructor(props){
        super(props);
        this.state ={
            
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
            <article className="tarjeta">
                <img src={this.props.characterInfo.artist.picture_medium} alt={this.props.characterInfo.artist.picture_medium} />
                <h3>{this.props.characterInfo.album.title}</h3>
                <p>Status: {this.props.characterInfo.album.title}</p>
                <p className="delete" onClick={()=>this.props.borrar(this.props.characterInfo.id)}>Borrar</p>
                <p className='more' onClick={() => this.viewMore()}>{this.state.text}</p>
                <section className={`${this.state.viewMore ? 'cardShow' : 'cardHide'}`}></section>
            </article>
        ) 
    }
}

export default Card;