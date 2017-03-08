var React = require('react');
var ReactDOM = require('react-dom');

var objectOne = {
  name: 'Teejay',
  location: 'Philadelphia'
};

var objectTwo = {
  age: 25,
  ...objectOne
};

console.log(objectTwo);

ReactDOM.render(
  <h1>Boilerplate App</h1>,
  document.getElementById('app')
);
