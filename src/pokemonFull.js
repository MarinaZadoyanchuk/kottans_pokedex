const React = require('react');

var PokemonFull = React.createClass({
  getStringTypes: function(types) {
    const typesArr = [];
    for (i in types) {
      typesArr.push(types[i].name);
    }
    return typesArr.join(', ');
  },
  render: function() {
    const pokemon = this.props.pokemon;
    const types = this.getStringTypes(pokemon.types);
    return (
      <div>
        <div onClick={this.props.onClose} className="close">X</div>
        <img src={"http://pokeapi.co/media/img/" + pokemon.pkdx_id + ".png"} className="img-rounded img-responsive center-block"/>
        <h4 className="text-center">{pokemon.name}</h4>
        <table className="table table-striped table-bordered">
          <tbody>
            <tr>
             <td>
               Type
             </td>
             <td>
               {types}
             </td>
            </tr>
            <tr>
              <td>
                Attack
              </td>
              <td>
                {pokemon.attack}
              </td>
            </tr>
            <tr>
              <td>
                Defence
              </td>
              <td>
                {pokemon.defense}
              </td>
            </tr>
            <tr>
              <td>
                HP
              </td>
              <td>
                {pokemon.hp}
              </td>
            </tr>
            <tr>
              <td>
                SP Attack
              </td>
              <td>
                {pokemon.sp_atk}
              </td>
            </tr>
            <tr>
              <td>
                SP Defence
              </td>
              <td>
                {pokemon.sp_def}
              </td>
            </tr>
            <tr>
              <td>
                Speed
              </td>
              <td>
                {pokemon.speed}
              </td>
            </tr>
            <tr>
              <td>
                Weight
              </td>
              <td>
                {pokemon.weight}
              </td>
            </tr>
            <tr>
              <td>
                Total moves
              </td>
              <td>
                {pokemon.moves.length}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = PokemonFull;