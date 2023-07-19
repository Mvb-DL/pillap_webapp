import React from 'react';
import CookieConsent from "react-cookie-consent";
import { Link } from 'react-router-dom';

export default function Cookie_Consent() {

    return(

        <CookieConsent
                        location="bottom"
                        buttonText="Cookies akzeptieren"
                        declineButtonText="Nicht akzeptieren"
                        cookieName="myAwesomeCookieName2"
                        style={{ background: "#2B373B" }}
                        buttonStyle={{ color: "#fff", fontSize: "15px", backgroundColor: "#ed6524" }}
                        expires={150}
                      >
                        Unsere Webseite verwendet Cookies, um das Nutzererlebins für die zu optimieren!{" "}
                        <span style={{ fontSize: "10px" }}><Link to="/dsgvo">Datenschutzerklärung</Link></span>
        </CookieConsent>

    )
}