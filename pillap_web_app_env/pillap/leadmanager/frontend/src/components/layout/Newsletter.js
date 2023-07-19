import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Newsletter = () => {

    const styles = {

        cta_button: {
            fontFamily: 'Magical Mystery Tour',
            fontSize: "1em",
            border: "2px solid #ed6524",
            backgroundColor: "#ed6524",
            borderRadius: "15px",
            width: "auto",
            maxWidth: "70%",
            height: "60%",
            padding: "10px",
            fontDisplay: "swap"
          },

        newsletter_input: {
            
            padding: "4%",
            maxWidth: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          },
  
          newsletter_input_bottom : {
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "5%",
            textAlign: "center",
            marginTop: "-5%"
          },
  
          icon_text: {
            paddingLeft: "10%",
            paddingRight: "10%",
            fontSize: "1.1em"
          },

  
          newsletter_headline : {
            fontSize: "1.7em",
            paddingBottom: "2%"
          },

          counter_number :{
            textAlign: "center",
            width: "100%",
            marginTop: "3%"
          },
    }

    const [loading, setLoading] = useState(false);
    const [agree, setAgree] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onChecked = e => setAgree(e.target.checked);

    const onSubmit = e => {
        
        e.preventDefault();

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        const body = JSON.stringify({
            email,
            agree 
        });

        const fetchData = async () => {

            setLoading(true);
            try {

                await axios.post(
                    'api/auth/newsletter_signup',
                    body,
                    config
                );
            } catch(err) {

            }
            setLoading(false);
        };

        fetchData();
    }

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {

        setIsActive(current => !current);

      };

    return (

        <div>
                <Form style={styles.newsletter_input} onSubmit={e => onSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label style={styles.newsletter_headline}>Newsletter</Form.Label>
                      <Form.Control type="text" name="email" placeholder="Deine Email Adresse" style={{borderRadius: "5px", color:"#000"}} onChange={e => onChange(e)} value={email} required/> 
                      <Form.Text className="text-muted" style={styles.mail_text}>
                        Du möchtest informiert bleiben?!
                      </Form.Text>

                      <div className="row" style={{paddingTop: "5%", marginLeft: '20px'}}>
                        <div>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name='agree'
                        onChange={e => onChecked(e)}
                        checked={agree}
                        required
                        id='newsletter_agree'
                    />
                    <label 
                        className='form-check-label'
                        style={{ marginLeft: '1px', textAlign: "left"}} 
                        htmlFor='agree'
                    >
                        Ich stimme den <Link to="/dsgvo">Datenschutzbestimmungen und den Nutzungsbedingungen</Link> zu.
                    </label>
                    </div>
                    </div>
                    </Form.Group>
                    <button className="newsletter_button btn btn-primary"
                                    
                                    style={{
                                    backgroundColor: isActive ? 'green' : '#ed6524',
                                    color: isActive ? 'white' : '',
                                    fontFamily: "Magical Mystery Tour",
                                    fontDisplay: "swap",
                                    fontSize: "1em",
                                    borderRadius: "15px",
                                    width: "auto",
                                    maxWidth: "70%",
                                    height: "60%",
                                    padding: "10px",
                                    border: isActive ? "solid 2px green" : "solid 2px #ed6524"
                                    }} onClick={handleClick}>

                        Bleibe informiert
                    </button>
                </Form>

                <span style={styles.counter_number} className="pt-5">Bereits <b>13</b> Personen haben sich für unseren Newsletter angemeldet</span>

            </div>

    )
};

export default Newsletter;