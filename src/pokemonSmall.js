var React = require('react');

var PokemonSmall = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.onClick}>
        <img src={"http://pokeapi.co/media/img/" + this.props.pkdx_id + ".png"} className="img-rounded img-responsive center-block" />
        <div className="info_pokemon">
          <h4 className="text-center">{this.props.name}</h4>
          <div className="types">
            {this.props.types.map((type) => {
              var resourceUriType = type.resource_uri.split('/');
              var typeId = resourceUriType[resourceUriType.length - 2];
              return <span
                className={"box-shadow " + type.name}
                key={type.name}
                onClick={(event) => { event.stopPropagation(); this.props.onType(type.name)}}
              >
                {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
              </span>
            })}
          </div>
        </div>
      </li>
    );
  }
});

module.exports = PokemonSmall;