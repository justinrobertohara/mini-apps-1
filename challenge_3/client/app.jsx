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
    this.sendData = this.sendData.bind(this);
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

  sendData() {
    var clientCheckout = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      cc: this.state.cc,
      expiryDate: this.state.expiryDate,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
    };

    console.log(clientCheckout);

    axios({
      method: 'post',
      url: '/checkout',
      data: { clientCheckout }
    })
      .then(function(response) {
        console.log(response);
        this.setState({
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
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(event);
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.setState({
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
    });
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
    } else if (
      this.state.initialButton === true &&
      this.state.secondForm === false &&
      this.state.thirdForm === false
    ) {
      console.log(this.state);
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          {/* <input type="submit" value="Next" /> */}
          <div>
            <button onClick={this.secondForm}>Go To Second Page</button>
          </div>
        </form>
      );
    } else if (
      this.state.initialButton === true &&
      this.state.secondForm === true &&
      this.state.thirdForm === false
    ) {
      console.log(this.state);
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Address Line 1:
            <input
              type="text"
              name="address1"
              value={this.state.address1}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Address Line 2:
            <input
              type="text"
              name="address2"
              value={this.state.address2}
              onChange={this.handleChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={this.state.state}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Zip-Code:
            <input
              type="text"
              name="zipCode"
              value={this.state.zipCode}
              onChange={this.handleChange}
            />
          </label>
          {/* <input type="submit" value="Next" /> */}
          <div>
            <button onClick={this.thirdForm}>Go To Third Form Page</button>
          </div>
        </form>
      );
    } else if (
      this.state.initialButton === true &&
      this.state.secondForm === true &&
      this.state.thirdForm === true
    ) {
      console.log(this.state);
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Credit Card Number:
            <input
              type="text"
              name="cc"
              value={this.state.cc}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Expiry Date
            <input
              type="text"
              name="expiryDate"
              value={this.state.expiryDate}
              onChange={this.handleChange}
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={this.state.cvv}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Billing Zip Code:
            <input
              type="text"
              name="billingZip"
              value={this.state.billingZip}
              onChange={this.handleChange}
            />
          </label>
          {/* <input type="submit" value="Next" /> */}
          <div>
            <button onClick={this.sendData}>Purchase</button>
          </div>
        </form>
      );
    }
  }
}

ReactDOM.render(<NameForm />, document.getElementById('root'));
