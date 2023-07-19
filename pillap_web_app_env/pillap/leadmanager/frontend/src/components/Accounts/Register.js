import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';


export class Register extends Component {
  
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {

    e.preventDefault();

    const { username, email, password, password2, first_name, last_name} = this.state;

    if (password !== password2) {

      this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });

    }
    
    else {
      const newUser = {
        username,
        password,
        email,
        first_name,
        last_name
      };

      this.props.register(newUser);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    
    if (this.props.isAuthenticated) {
      return <Redirect to="/user_marketplace" />;
    }

    return (
      <div className="col-md-5 m-auto" style={{paddingBottom: "5%"}}>
        <div className="card card-body mt-5" style={{border: '1px solid #ccc', borderRadius: "25px", padding: "2%" }}>
          <h2 className="text-center">Registrieren</h2>
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
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-row">
            <div className="col-md-6 m-auto">
            <div className="form-group">
              <label>Vorname</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                onChange={this.onChange}
              />
            </div>
            </div>
            <div className="col-md-6 m-auto">
            <div className="form-group">
              <label>Nachname</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                onChange={this.onChange}
              />
            </div>
            </div>
            </div>
            <div className="form-group">
              <label>Passwort</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Passwort wiederholen</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary" style={{backgroundColor: "#ed6524", border: "1px solid #ed6524", borderRadius: "15px"}}>
                Registrieren
              </button>
            </div>
            <p>
              Du hast schon einen Account? <Link to="/login">Anmelden</Link>
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

export default connect(mapStateToProps, { register, createMessage })(Register);
