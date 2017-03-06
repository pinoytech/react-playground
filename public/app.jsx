var Greeter = React.createClass({
  render: function() {
    const name = this.props.name;
    return (
      <div>
        <h1 className="test">Hello {name}</h1>
        <p>This is from a component</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="Teejay" />,
  document.getElementById('app')
);
