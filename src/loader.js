var React = require('react');

var Loader = React.createClass({
  getImage: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  render: function() {
    return (
      <div className="loader">
        <img src={"src/images/pokemons/" + this.getImage(1,11) + ".gif"} className="center-block" />
        <span>LOADING...</span>
      </div>
    )
  }
});

module.exports = Loader;