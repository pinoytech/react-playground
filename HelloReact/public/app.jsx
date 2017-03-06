var GreeterMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="test">Hello Mikey</h1>
        <p>a message</p>
      </div>
    )
  }
});

var GreeterForm = React.createClass({
  render: function() {
    return (
      <form>
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
        <GreeterMessage/>
        <GreeterForm/>

      </div>
    );
  }
});

var firstName = 'Teejay';

ReactDOM.render(
  <Greeter name={firstName} message="Message from prop!"/>,
  document.getElementById('app')
);
