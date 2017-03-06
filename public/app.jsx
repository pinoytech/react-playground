var Greeter = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="test">Hello {this.props.name}</h1>
        <p>This is from a component</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="Teejay" />,
  document.getElementById('app')
);
