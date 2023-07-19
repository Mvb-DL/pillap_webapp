import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { FaEye } from 'react-icons/fa';

export class Login extends Component {

  constructor(props) {

    super(props);

    this.state = {
      passwordShown: false, 
    };

    this.timer()

  }

  timer(){
    setInterval(() => {
      this.setState({passwordShown: false})
    }, 1000)
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    username: PropTypes.string,
  };

  login = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {


    if (this.props.isAuthenticated) {
      return <Redirect to="/user_marketplace" />;
    }

    return (
      <div className="col-md-5 m-auto" style={{paddingBottom: "10%", paddingTop: "5%"}}>
        <div className="card card-body mt-5" style={{border: '1px solid #ccc', borderRadius: "25px", padding: "2%" }}>
          <h2 className="text-center">Anmelden</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Benutzername</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                required
              />
            </div>

            <div className="form-group">

              <label>Passwort</label>

              <input
                className="form-control input-field"
                name="password"
                onChange={this.onChange}
                required
                type={this.state.passwordShown ? "text" : "password"}
              />

              <FaEye
               onClick={() => 
                this.setState(
                { passwordShown: this.state.passwordShown = true })
                
                }/>

            </div>

            <div className="form-group">
              <button type="submit" onClick={this.login} className="btn btn-primary" style={{backgroundColor: "#ed6524", border: "1px solid #ed6524", borderRadius: "15px"}}>
                Anmelden
              </button>
            </div>
            <p>
              Du hast noch keinen Account? <Link to="/register">Registrieren</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
