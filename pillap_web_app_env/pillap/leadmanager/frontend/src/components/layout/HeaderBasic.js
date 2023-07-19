import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HeaderBasic extends Component {


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

          const guestLinks = (

            <div>

                <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/user_marketplace" className="nav-link" style={styles.header_text}>
                        Produkt
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about_us" className="nav-link" style={styles.header_text}>
                        Konzept
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/helpcenter" className="nav-link" style={styles.header_text}>
                        Hilfe
                      </Link>
                    </li>
                </ul>

            </div>
          )

        return (

        
        <div className='main_header pt-2' style={styles.main_header}>

            <nav className="navbar navbar-expand-sm navbar-light">
              <div className="container">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <a className="navbar-brand" href="#">
                    <b className='ml-3'>Pillap</b>
                  </a>
                </div>
                <div>

                  {guestLinks}

                </div>

                </div>
            </nav>

        </div>

        )
    }

}



