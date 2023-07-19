import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


export class Header extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  state = {
    open: false
  };

  render() {

    const styles = {

      main_header : {
        fontFamily: "Roboto, sans-serif",
        color: "#000",
        fontDisplay: "swap"
      },

      search_bar:{
        left: "0",
      },

      header_text :{
        color: "#000"
      }


    };
    
    const { isAuthenticated, user } = this.props.auth;

    const numberCart = this.props.numberCart

    const authLinks = (

      <ul className="navbar-nav ml-auto mt-0">

        <span className="nav-item">
          <Link to="/user_profile" className="nav-link">
            {user ? `Hey ${user.username}` : ''}
          </Link>
        </span>

        <li className="nav-item mt-2">
          <Link to="/user_marketplace" className="nav-link">
            Produkt
          </Link>
        </li>

        <li className="nav-item mt-2">
          <Link to="/exchange_platform" className="nav-link">
            Tauschbörse
          </Link>
        </li>

        <li className="nav-item mt-2">
          <Link to="/helpcenter" rel="canonical" className="nav-link">
            Hilfe
          </Link>
        </li>

        <li className="nav-item mt-2 mr-2">
          <Link to="/user_cart" className="nav-link">
            Warenkorb <span class="badge badge-primary">{numberCart}</span>
          </Link>
        </li>

        <li className="nav-item mt-2">
          <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light" style={{backgroundColor: "#ed6524", border: "none", borderRadius: "5px"}}>
            Logout
          </button>
        </li>
      </ul>
    );

    const guestLinks = (

      <ul className="navbar-nav ml-auto mt-0">
        <li className="nav-item">
          <Link to="/user_marketplace" className="nav-link" style={styles.header_text}>
            Produkt
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about_us" className="nav-link" style={styles.header_text}>
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/helpcenter" className="nav-link" style={styles.header_text}>
            Hilfe
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link" style={styles.header_text}>
            Registrieren
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link" style={styles.header_text}>
            Anmelden
          </Link>
        </li>
      </ul>

    );

    return (

    <div className='main_header pt-2' style={styles.main_header}>

      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <b className='ml-3'>Pillap</b>
            </a>
          </div>

            
          {isAuthenticated ? authLinks : guestLinks}


        </div>
      </nav>

      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  numberCart: state.cart.numberCart
});

export default connect(mapStateToProps, { logout })(Header);
