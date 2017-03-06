var Greeter = React.createClass({

  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message'
    }
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  onButtonClick: function(event) {
    event.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';
    if (typeof name  == 'string' && name.length > 0) {
      this.setState({name: name});
    }
  },
  render: function() {
    const name = this.state.name;
    const message = this.props.message;
    return (
      <div>
        <h1 className="test">Hello {this.state.name}</h1>
        <p>{message}</p>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Teejay';

ReactDOM.render(
  <Greeter name={firstName} message="Message from prop!"/>,
  document.getElementById('app')
);
