import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padtoThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number )

export class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padtoThree(this.props.id)}.png`
    return (    
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt= {this.props.name}/>
        </div>
        <div className="Pokecard-data">Pokemon Type: {this.props.type}</div>
        <div className="Pokecard-data">Pokemon AP (Ability Points): {this.props.AP}</div>

      </div>
    )
  }
}

export default Pokecard
