import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import AlwaysOpenExample from '../layout/Accordion';
import question from "../../../assets/images/question.jpg"


export default class HelpCenterLadingPage extends Component {

    render() {

        const styles = {

            desc_text: {
                color: "#000",
                textDecoration: "none",
                paddingTop: "2%",
                paddingBottom: "2%"
              },

              helpcenter_main_headline : {
                fontSize : "3.5em",
              },

              icon : {
                width: "55px",
                height: "55px",
                marginBottom: "2%"
              },

              nft_intro_text: {
                width: "60%",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "1.1em",
                marginBottom: "7%"
              },

              accordion: {
                marginTop: "5%",
                marginBottom: "10%"
              },

              accordion_heading: {
                marginBottom: "4%",
                marginTop: "-4%"
              }

        }

        const product_card = {
            boxShadow: "rgb(0 0 0 / 4%) 0px 6px 8px",
            padding: "1%",
            marginTop: "-3%"
          };

        
        const product_img = {
            objectFit: "cover",
            height: "200px",
            width: "350px",
            
          };

        const desc_product = {
            backgroundColor: "#fff",    
          };

        return (

            <Container>

                <section className='mt-5'>

                <div className='row pb-4'>
                    
                    <div className='col text-center'>

                        <h1 className='helpcenter_main_headline' style={styles.helpcenter_main_headline}>Hilfe</h1>

                    </div>

                </div>

                <div className="row d-flex justify-content-between mt-5 section_art" style={styles.section_art}>

                <div className="col m-2" style={product_card}>
                    <Link to="/product_01">

                    <img style={product_img} src={question} className="img-fluid" />

                    <div style={desc_product}>
                      <h2 className='text-center desc_text' style={styles.desc_text}><b>Was ist das Pillap?</b></h2>
                    </div>
                    
                    </Link>
                  </div>

                  <div className="col m-2" style={product_card}>
                    <div>
                      <Link to="/product_02">
                      <img style={product_img} src={question} className="img-fluid " />
                      <h2 className='text-center desc_text' style={styles.desc_text}><b>Inwiefern ist das Pillap nachhaltig?</b></h2>
                      </Link>
                    </div>
                  </div>

                  <div className="col m-2" style={product_card}>
                    <Link to="/product_01">
                    <img style={product_img} src={question} className="img-fluid " />
                    <h2 className='text-center desc_text' style={styles.desc_text}><b>Wie kaufe ich ein Pillap?</b></h2>
                    </Link>
                    </div>

                </div>

                </section>

                <section style={styles.accordion}>

                    <div className='container pt-5'>

                        <div className='row'>

                            <div className='col text-center pt-5'>

                                <h1 style={styles.accordion_heading}>Häufige Fragen</h1>

                                <AlwaysOpenExample></AlwaysOpenExample>

                            </div>

                        </div>
                        
                    </div>

                </section>

            </Container>
        )
    }
}
