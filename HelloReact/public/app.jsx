var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    return (
      <div>
        <h1 className="test">Hello {name}!</h1>
        <p>a message</p>
      </div>
    )
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" />
        <button>Set Name</button>
      </form>
    )
  }
});

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
  handleNewName: function(name) {
    this.setState({name: name});
  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <GreeterMessage name={name}/>
        <GreeterForm onNewName={this.handleNewName}/>

      </div>
    );
  }
});

var firstName = 'Teejay';

ReactDOM.render(
  <Greeter name={firstName} message="Message from prop!"/>,
  document.getElementById('app')
);
