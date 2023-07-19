import { Link } from 'react-router-dom';
import React, { Component } from 'react';



export default class Footer extends Component {

    render(){

        const styles ={

            footer : {
              fontFamily: "Roboto, sans-serif",
                color: "#000",
                backgroundColor: "#fff",
                height: "100%",
                bottom: "0",
                fontDisplay: "swap"
            },

            header_footer: {
              listStyleType: "none",
              marginLeft: "-15px"
            }
        }

        return (

            <footer className="text-center text-lg-start footer pt-3" style={styles.footer}>

                <div className="container p-4">

                  <div className="row">

                    <div className="col">

                      <span className="text-uppercase text-left">Pillap</span>
                      
                    </div>

                    <div className="col">

                      <ul>

                        <li className="text-uppercase text-left" style={styles.header_footer}><b>Mehr von Pillap</b></li>

                        <li className='text-left pt-2'><Link to="/user_marketplace">Produkt</Link></li>
                        <li className='text-left pt-2'><Link to="/about_us">About Us</Link></li>
                        <li className='text-left pt-2'><Link to="/helpcenter">Hilfe</Link></li>

                      </ul>
 

                    </div>

                    <div className="col">

                      <ul>
                        
                        <li className="text-left pt-2"><Link to="/impressum">Impressum</Link></li>
                        <li className="text-left pt-2">Kontakt</li>
                        <li className="text-left pt-2"><Link to="/dsgvo">DSGVO</Link></li>
                        <li className="text-left pt-2">Partner</li>

                      </ul>

                    </div>

                  </div>

                </div>

                <div className="text-center p-3">
                  © 2023 Copyright
                </div>
        </footer>

        )
    }

}