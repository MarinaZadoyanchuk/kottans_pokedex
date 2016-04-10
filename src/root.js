var React = require('react');
var Pokedex = require('./pokedex');
var PokemonFull = require('./pokemonFull');

var Root = React.createClass({
  getInitialState: function() {
    return {
      pokemons: [],
      filderedPokemons: [],
      chosenPokemon: null,
      chosenType: null,
      isLoading: false
    }
  },

  componentDidMount: function() {
    this.loadMore();
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  showPokemon: function(pokemonId) {
    this.setState({
      chosenPokemon: pokemonId
    });
  },

  getPokemonById: function(pokemonId) {
    var pokemons = this.state.pokemons;
    for (const i in pokemons ) {
      if (pokemons[i].pkdx_id == pokemonId) return pokemons[i];
    };

    return null;
  },

  loadMore: function() {
    this.setState({
      isLoading: true
    });
    this.serverRequest = $.get(
      "http://pokeapi.co/api/v1/pokemon/",
      {limit: 12, offset: this.state.pokemons.length},
      (result) => {
        this.setState({
          pokemons: this.state.pokemons.concat(result.objects),
          isLoading: false
        });

        if (this.state.chosenType) this.filterVisiblePokemons(this.state.chosenType);
      }
    );

  },

  filterVisiblePokemons(typeName) {
    var filteredPokemons = this.state.pokemons.filter((pokemon) => {
      return pokemon.types.some((type) => type.name == typeName);
    });
    this.setState({
      filteredPokemons: filteredPokemons,
      chosenType: typeName
    });
  },

  resetFilter: function() {
    this.setState({
      chosenType: null
    });
  },

  render: function() {
    return (
      <div className="row-fluid">
        <h1 className="text-center" onClick={this.state.chosenType ? this.resetFilter : false}><span>Pokedex</span></h1>
        <div className={this.state.chosenPokemon ? "col-md-8" : "col-md-8 col-md-offset-2"}>
          {this.state.chosenType ? <h2 className="filtered">Selected type: <span className={this.state.chosenType}>{this.state.chosenType}</span></h2> : null}
          <div id="pokemons">
            <Pokedex
              pokemons={this.state.chosenType ? this.state.filteredPokemons : this.state.pokemons}
              onPokemonClick={this.showPokemon}
              onLoadClick={!this.state.isLoading ? this.loadMore : null}
              isLoading={this.state.isLoading}
              onTypeClick={this.filterVisiblePokemons}
              chosenType={this.state.chosenType}
              resetFilter={this.resetFilter}
            />
          </div>
        </div>
        <div className={this.state.chosenPokemon ? "col-md-4 full_pokemon" : ""}>
          {this.state.chosenPokemon ? <PokemonFull
            pokemon={this.getPokemonById(this.state.chosenPokemon)}
            onClose={() => this.setState({chosenPokemon: null})}
          /> : ''}
        </div>
      </div>
    )
  }
});

module.exports = Root;