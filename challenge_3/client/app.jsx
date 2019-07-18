class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialButton: false,
      secondForm: false,
      thirdForm: false,
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      cc: '',
      expiryDate: '',
      cvv: '',
      billingZip: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initialButton = this.initialButton.bind(this);
    this.secondForm = this.secondForm.bind(this);
    this.thirdForm = this.thirdForm.bind(this);
  }

  initialButton() {
    this.setState({
      initialButton: true
    });
  }

  secondForm() {
    this.setState({
      secondForm: true
    });
  }

  thirdForm() {
    this.setState({
      thirdForm: true
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(event);
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    if (this.state.initialButton === false) {
      return (
        <div>
          <button onClick={this.initialButton}>
            Go To First Page of Check Out
          </button>
        </div>
      );
    }
    if (this.state.initialButton === true && this.state.secondForm === false) {
      console.log(this.state);
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="text" name="password" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Next" />
          <div>
            <button onClick={this.secondForm}>Go To Second Page</button>
          </div>
        </form>
      );
    }
    if (this.state.initialButton === true && this.state.secondForm === true) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Address Line 1:
            <input type="text" name="address1" onChange={this.handleChange} />
          </label>
          <label>
            Address Line 2:
            <input type="text" name="address2" onChange={this.handleChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" onChange={this.handleChange} />
          </label>
          <label>
            State:
            <input type="text" name="state" onChange={this.handleChange} />
          </label>
          <label>
            Zip-Code:
            <input type="text" name="zipCode" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Next" />
          <div>
            <button onClick={this.thirdForm}>Go To Third Form Page</button>
          </div>
        </form>
      );
    }
    if (
      this.state.initialButton === true &&
      this.state.secondForm === true &&
      this.state.thirdForm === true
    ) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Credit Card Number:
            <input type="text" name="cc" onChange={this.handleChange} />
          </label>
          <label>
            Expiry Date
            <input type="text" name="expiryDate" onChange={this.handleChange} />
          </label>
          <label>
            CVV:
            <input type="text" name="cvv" onChange={this.handleChange} />
          </label>
          <label>
            Billing Zip Code:
            <input type="text" name="billingZip" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Next" />
          <div>
            <button onClick={this.thirdForm}>Go To Next Page</button>
          </div>
        </form>
      );
    }
  }
}

ReactDOM.render(<NameForm />, document.getElementById('root'));
