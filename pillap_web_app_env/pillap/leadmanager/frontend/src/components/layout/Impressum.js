import React from 'react';
import { Helmet } from "react-helmet";

export default function Impressum() {

    return(

        <div class="container-fluid">

        <Helmet>
            <meta name="robots" content="noindex, nofollow, noarchive"></meta>
        </Helmet>

            <div class="row" style={{padding: "5%"}}>
                <div class="col">

                    <h1>Impressum</h1>

                    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                    <p>Pillap Products GbR<br />
                    Sonnenstra&szlig;e 1<br />
                    97072 W&uuml;rzburg</p>

                    <p><strong>Vertreten durch:</strong>
                    <br />
                    Mario von Bassen<br />
                    Julian Hein<br/>
                    Pia Weber
                    </p>

                    <h2>Kontakt</h2>
                    <p>Telefon: 01577/35633756<br />
                    E-Mail: info@pillap.de</p>

                    <h2>EU-Streitschlichtung</h2>
                    <p>Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

                    <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
                    <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                    <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>

                </div>
            </div>


        </div>
    )

}