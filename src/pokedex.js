var React = require('react');
var PokemonSmall = require('./pokemonSmall');
var Loader = require('./loader');

var Pokedex = React.createClass({
  render: function() {
    var pokemons = this.props.pokemons;

    if (!pokemons.length) return (<Loader />);

    return (
      <div>
        <ul className="list-inline list_pokemons">
          {pokemons.map((pokemon) =>
            (
              <PokemonSmall
                pkdx_id={pokemon.pkdx_id}
                key={pokemon.pkdx_id}
                name={pokemon.name}
                types={pokemon.types}
                onClick={() => this.props.onPokemonClick(pokemon.pkdx_id)}
                onType={this.props.onTypeClick}
              />
            )
          )}
        </ul>
        {this.props.isLoading ? <div className="is_loading text-center"><img src="src/images/moreLoader.gif" /></div> : null}
        {!this.props.chosenType
          ? <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.props.onLoadClick}>Load More</button>
          : <button type="button" className="btn btn-default btn-lg" onClick={this.props.resetFilter}>Back to list pokemons</button>
        }
      </div>
    )
  }
});

module.exports = Pokedex;