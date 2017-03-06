var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message'
    }
  },
  render: function() {
    const name = this.props.name;
    const message = this.props.message;
    return (
      <div>
        <h1 className="test">Hello {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var firstName = 'Teejay';

ReactDOM.render(
  <Greeter name={firstName} message="Message from prop!"/>,
  document.getElementById('app')
);
