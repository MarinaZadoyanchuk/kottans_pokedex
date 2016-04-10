var React = require('react');

var Pokemon = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.onClick}>
        <img src={"http://pokeapi.co/media/img/" + this.props.pkdxId + ".png"} className="img-rounded img-responsive center-block" />
        <h4 className="text-center">{this.props.name}</h4>
        <div className="types">
          {this.props.types.map(function(type) {
            return <span className={"types " + type.name} key={type.name}>{type.name}</span>
          })}
        </div>
      </li>
    );
  }
});

module.exports = Pokemon;