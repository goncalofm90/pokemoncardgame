import React, { Component } from 'react'
import Pokecard from "./Pokecard";
import './Pokedex.css';


export class Pokedex extends Component {
  render() {
    let title;
    if(this.props.isWinner){
      title = <h1 className="Pokedex-winner">Winning Team!</h1>
    }else {
      title = <h1 className="Pokedex-loser">Losing Team</h1>
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Total AP : {this.props.AP}</h4>
        <div className="Pokedex-cards">
        {this.props.pokemon.map((p)=> (
          <Pokecard id={p.id} name={p.name} type={p.type} AP={p.base_experience} />
        ))}
        </div>
      </div>
    )
  }
}

export default Pokedex
