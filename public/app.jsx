var Greeter = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello React</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
