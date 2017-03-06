var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React'
    }
  },
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
  <Greeter />,
  document.getElementById('app')
);
