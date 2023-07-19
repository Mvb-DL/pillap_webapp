import React, { Component, useState } from 'react';
import { FaLock, FaChair, FaBed, FaAngular, FaEye, FaLinkedin, FaAngleDoubleDown  } from "react-icons/fa";
import AlwaysOpenExample from './layout/Accordion';
import Cookie_Consent from './layout/CookieConsent';
import mario_image from "../../assets/images/mario.webp";
import julian_image from "../../assets/images/julian.webp";
import pia_image from "../../assets/images/pia.webp";
import bm_image from "../../assets/images/bm.webp";
import pillap_one from "../../assets/images/pillap_one.webp";
import pillap_two from "../../assets/images/pillap_two.webp";
import pillap_three from "../../assets/images/pillap_three.webp";
import testimonial_one from "../../assets/images/testimonial_one.webp";
import testimonial_two from "../../assets/images/testimonial_two.webp";
import { Helmet } from "react-helmet";
import Newsletter from './layout/Newsletter';
import { LazyLoadImage } from "react-lazy-load-image-component";
import pillap_cta from "../../assets/images/pillap_prototype.webp";


export default class HomePage extends Component {

      constructor(props) {
        
        super(props);
      
        this.state = {
          collapseMenu: true,
          collapseMenuTwo: true,
        };
      
        this.showHide = this.showHide.bind(this);
        this.showHideTwo = this.showHideTwo.bind(this);

        this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
        
      }

      showHide(e) {

        e.preventDefault();
      
        this.setState({
          collapseMenu: !this.state.collapseMenu,
        });
      }

      showHideTwo(e) {

        e.preventDefault();
      
        this.setState({
          collapseMenuTwo: !this.state.collapseMenuTwo
        });
      }

      componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
      }


    render() {

      const styles = {

        magic_headline :{
          fontFamily: 'Magical Mystery Tour',
          marginBottom: "5%",
          color: "#000",
          fontWeight: "700",
          fontDisplay: "swap",
        },

        cta_point: {
          fontSize: "1.2em",
          listStyle: "none",
          textAlign: "left"
        },

        main_headline:{
          fontSize: "4.5em",
        },

        main_headline_sm:{
          fontSize: "2.5em",
          textAlign: "left"
        },

        main_subline:{
          fontSize: "4.5em",
          marginTop: "-5%"
        },

        main_subline_sm:{
          fontSize: "2.5em",
          textAlign: "left"
        },

        center_headline :{
          textAlign: "center"
        },

        text_font_testimonial: {
          fontFamily: "Caveat, sant-serif",
          fontSize: "1.4em",
          fontDisplay: "swap",
        },

        button_box:{
          marginTop: "2%"
        },

        bm_section: {
          paddingTop: "10%",
          paddingBottom: "5%"
        },

        cta_button: {
          fontFamily: 'Magical Mystery Tour',
          fontSize: "1.3em",
          border: "2px solid #ed6524",
          backgroundColor: "#ed6524",
          borderRadius: "15px",
          width: "auto",
          maxWidth: "70%",
          height: "100%",
          padding: "15px",
          fontDisplay: "swap",
        },

        cta_subline: {
          fontSize: "1.5em",
          textAlign: "left"
        },

        cta_subline_sm: {
          fontSize: "1.2em",
          textAlign: "left"
        },

        mail_text: {
          color: "#000"
        },

        cta_pic:{
          maxWidth: "450px",
          maxHeight: "auto",
        },

        cta_pic_sm:{
          maxWidth: "250px",
          maxHeight: "auto",
          marginRight: "auto",
          marginLeft: "auto",
        },

        launch_box: {
          backgroundColor: "#fff",
          paddingTop: "10%",
          paddingBottom: "5%"
        },

        problem_section: {
          backgroundColor: "#f6f8fc",
          paddingTop: "7%",
        },

        problem_section_headline : {
          fontSize: "3.2em"
        },

        photo_gallery: {
          backgroundColor: "#fff",
          paddingTop: "10%",
          paddingBottom: "5%"
        },

        counter_section_headline: {
          fontSize: "3em",
          marginTop: "-3%"
        },

        counter_section_headline_sm: {
          fontSize: "2em",
          marginTop: "-3%"
        },

        community_subheadline: {
          marginTop: "-3%"
        },


        newsletter_headline : {
          fontSize: "1.7em",
          paddingBottom: "2%"
        },

        cta_section: {
          paddingLeft: "10%",
          marginTop: "5%",
          marginBottom: "2%",
          backgroundColor: "#f6f8fc"
        },

        pillap_pictures:{
          maxWidth: "350px",
          maxHeight: "400px"
        },

        bm_pic :{
          width: "auto",
          maxWidth: "500px",
          height: "auto",
          marginLeft: "15%",
          marginTop: "10%",
        },

        idea_section: {
          backgroundColor: "#ed6524",
          marginTop: "-10%",
          paddingBottom: "5%",
          paddingTop: "5%"
        },

        icon : {
          fontSize: "2.5em",
          textAlign: "center",
          color: "#ed6524",
          display: "inline-block"
        },

        linked_icon: {
          fontSize: "2.5em",
          textAlign: "center",
          color: "0e76a8",
          display: "inline-block"
        },

        icon_subline: {
          textAlign: "center",
          fontWeight: "800",

        },

        newsletter_input: {
          border: "#ed6524 solid 2px",
          borderRadius: "15px",
          width: "80%",
          marginRight: "10%",
          padding: "5%"
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

        testimonial_box : {
          backgroundColor : "#f6f8fc",
          borderRadius : "5px",
          padding: "2%",
          textAlign: "left",
          maxHeight: "40%",
        },

        testimonial_text: {
          paddingLeft: "5%",
          paddingRight: "5%",
          fontFamily: "Caveat, sant-serif",
          fontSize: "1.3em",
          fontDisplay: "swap",
        },

        testimonial_data: {
          marginLeft: ""
        },

        testimonial_pic:{
          maxHeight: "65px",
          borderRadius: "10px"
        },

        profile_pic_mario: {
          marginTop: "5%",
        
        },

        bm_image:{
          maxWidth: "80%",
          maxHeight: "400px",
          marginTop: "15%",
          marginLeft: "10%",
          borderRadius: "10px"
        },

        cta_testimonial_name: {
          paddingTop: "3%",
          width: "50%",
          paddingLeft: "5%"
        },

        testimonial_section : {
          backgroundColor: "#fff",
          paddingTop: "10%",
          paddingBottom: "15%"
        },

        testimonial_first_row:{
         marginLeft: "auto",
         marginRight: "auto"
        },

        testimonial_second_row :{
          marginLeft: "auto",
          marginRight: "auto"
        },

        testimonial_name: {
          marginLeft: "-55%",
          paddingTop: "15%",
          fontSize: "1em"
        },

        testimonial_name_two : {
          marginLeft: "-70%",
          paddingTop: "10%"
        },

        idea_section_headline : {
          marginTop : "2%",
          color: "#fff",
          fontSize: "3.3em"
        },

        profile_pic: {
          maxWidth: "50%",
          maxHeight: "auto",
          marginTop: "3%",
          borderRadius: "10px",
        },

        counter_text: {
          textAlign: "justify",
          fontSize: "1.2em",
          marginTop: "2%"
        },  

        profile_pic_one:{
          paddingTop: "15%",
          marginRight: "-15%"
        },

        idea_section_intro : {
          marginTop: "-2%",
          paddingLeft : "25%",
          paddingRight: "25%",
          textAlign: "justify",
          color: "white",
          marginBottom: "5%",
          width: "auto"
        },

        intro_name: {
          color: "#fff",
          textAlign: "left",
          fontWeight: "800",
          paddingBottom: "2%"
        },

        intro_name_sm: {
          color: "#fff",
          textAlign: "center",
          fontWeight: "800",
          paddingBottom: "2%"
        },

        intro_text: {
          textAlign: "justify",
          color: "#fff",
        },

        intro_text_sm: {
          textAlign: "justify",
          color: "#fff",
          margin: "5%"
        },

        intro_name_left: {
          color: "#fff",
          textAlign: "right",
          paddingRight: "25%",
          fontWeight: "800",
          paddingBottom: "2%"
        },

        bm_text:{
          textAlign: "justify",
          paddingLeft: "15%",
          paddingRight: "15%"
        },
        
        bm_headline:{
          fontFamily: "Magical Mystery Tour",
          textAlign: "left",
          paddingLeft: "15%",
          fontDisplay: "swap",
        },

        bm_headline_sm:{
          fontFamily: "Magical Mystery Tour",
          textAlign: "center",
          paddingLeft: "15%",
          fontDisplay: "swap",
        },

        accordion: {
          marginLeft: "20%",
          marginRight: "20%",
        },

        faq_section: {
          paddingTop: "10%"
        },

        product_text: {
          fontWeight: "500",
          fontSize: "1.2em"
        }

      }

        return (

          <div className="container-fluid">

            <Helmet>
                <body style="background-color: #f6f8fc" />
                <title>Deine Laptoptasche als Kissen | Pillap</title>
                <meta charset="UTF-8"></meta>
                <meta name="keywords" content="HTML, CSS, JavaScript"></meta>
                <meta name="description" content="Pillap = Pillow + Laptop. Eine Laptoptasche, die den Markt für immer verändern wird. Konfiguriere Dir jetzt deine Laptoptasche..."/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="copyright" content="Pillap"/>
                <meta name="robots" content="index,follow"/>
                <meta http-equiv="language" content="de"></meta>
            </Helmet>

            <Cookie_Consent/>

              <div className="row" style={{...styles.box, ...styles.cta_section}}>

                <div className="col-sm-7">

                  <div className="row">
                      <div className="col-sm-12">
                        {this.state.matches && <h1 style={{...styles.magic_headline, ...styles.main_headline}}>Pillow + Laptop</h1>}
                        {!this.state.matches && <h1 style={{...styles.magic_headline, ...styles.main_headline_sm}}>Pillow + Laptop</h1>}
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-sm-12">
                        {this.state.matches && <h2 style={{...styles.magic_headline, ...styles.main_subline}}>Das Pillap</h2>}
                        {!this.state.matches && <h2 style={{...styles.magic_headline, ...styles.main_subline_sm}}>Das Pillap</h2>}
                      </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      {this.state.matches && <h3 style={{...styles.magic_headline, ...styles.cta_subline}}>Die erste Laptoptasche, die auch ohne Laptop sinnvoll ist</h3>}
                      {!this.state.matches && <h3 style={{...styles.magic_headline, ...styles.cta_subline_sm}}>Die erste Laptoptasche, die auch ohne Laptop sinnvoll ist</h3>}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                          <p style={styles.cta_point}>Eine Verbindung aus Laptoptasche und Kissen</p>
                          <p style={styles.cta_point}>Effizienz und Komfort immer mit auf dem Weg</p>
                    </div>
                  </div>

                
                  <div className="row mt-3">
                    <div className="col" style={styles.button_box}><button className="btn btn-primary" style={styles.cta_button}>Pillap entdecken</button></div>
                  </div>

                </div>

                <div className="col-sm-5">

                  {this.state.matches && <img style={styles.cta_pic} width="350px" height="300px" src={pillap_cta} alt="Pillap Pillow-Laptopbag Heroshot" fetchpriority="high"/>}
                  {!this.state.matches &&  <img style={styles.cta_pic_sm} className="mb-5 mt-5" width="250px" height="250px" src={pillap_cta} alt="Pillap Pillow-Laptopbag Heroshot" fetchpriority="high"/>}

                </div>

              </div>


              <div className="row" style={{...styles.box, ...styles.photo_gallery}}>

                <div className="col" style={styles.center_headline}>

                  <h2 style={{...styles.magic_headline, ...styles.problem_section_headline}}>Das Pillap</h2>

                  <div className="row">

                        <div className="col-sm-4">
                          <LazyLoadImage style={styles.pillap_pictures} width="350px" height="300px" src={pillap_one} alt="Product picture Pillap front view"></LazyLoadImage>
                        </div>

                        <div className="col-sm-4">
                          <LazyLoadImage style={styles.pillap_pictures} width="350px" height="350px"  src={pillap_two} alt="Product picture Pillap side view"></LazyLoadImage>
                        </div>

                        <div className="col-sm-4">
                          <LazyLoadImage style={styles.pillap_pictures} width="350px" height="350px" src={pillap_three} alt="Product picture Pillap interior view"></LazyLoadImage>
                        </div>

                  </div>

                  <div className="row justify-content-center mt-5" style={styles.product_text}>

                    <div className="col-sm-6">
                      Das Pillap ist eine Laptoptasche, die gleichzeitig auch als Kissen verwendet werden kann. Das Pillap besteht aus Einzelteilen, die unabhängig voneinander entfernt und wieder zusammengefügt werden können.

                      Das Pillap besteht aus folgenden Einzelteilen:
          
                      Die Innenlaptoptasche mit Reißverschluss (Material: Microfaser, Schaumstoff)
                      Die Außenpolsterung mit Reißverschluss (Material: Microfaser, Volumenvlies)
                      Gurtschlaufe (zum Umhängen und als Rucksack)
                      GPS-Tracking System
                      Zusatzfach
                    </div>

                  </div>
                </div>

              </div>

              <div className="row" style={{...styles.box, ...styles.problem_section}}>

                <div className="col" style={styles.center_headline}>

                    <div className="row">
                      <div className="col">
                        <h2 style={{...styles.magic_headline, ...styles.problem_section_headline}}>Pillap = Problemlöser</h2>
                      </div>
                    </div>

                    <div className="row mb-5" style={{marginTop: "-2%"}}>
                       <div className="col">
                         <h3 className="text-center">Wie unsere Laptoptasche dir das Leben einfacher macht</h3>
                       </div>
                    </div>

                    <div className="row justify-content-md-center">

                      <div className="col-sm-3 p-3">

                        <div className="row" style={styles.icon}>
                          <div className="col"><FaChair/>
                        </div>
                        </div>
                          <div className="row">
                            <div className="col" style={styles.icon_subline}><h2>Unbequemes Sitzen</h2></div>
                          </div>
                          <div className="row">
                            <div className="col" style={styles.icon_text}>
                                <p>Durch die ausgeklügelte Technologie des Pillaps sitzt man überall bequem!</p>
                              </div>
                          </div>

                      </div>

                    <div className="col-sm-3 p-3">

                        <div className="row" style={styles.icon}><div className="col"><FaLock/></div></div>
                        <div className="row"><div className="col" style={styles.icon_subline}><h2>Diebstahl</h2></div></div>
                        <div className="row"><div className="col" style={styles.icon_text}><p>Das Pillap verfügt über ein internetloses GPS Tracking System, welches immer 
                          den Standort deiner Tasche anzeigt</p></div></div>

                    </div>

                    <div className="col-sm-3 p-3">

                        <div className="row" style={styles.icon}><div className="col"><FaBed/></div></div>
                        <div className="row"><div className="col" style={styles.icon_subline}><h2>Auch mal ausruhen</h2></div></div>
                        <div className="row"><div className="col" style={styles.icon_text}><p>Nutze die Zeit auf dem Weg wohin auch immer, um Dich auch mal auszuruhen!</p></div></div>

                    </div>

                </div>

                <div className="row justify-content-md-center">

                  <div className="col-sm-3 p-3">
                          
                      <div className="row" style={styles.icon}><div className="col"><FaAngular></FaAngular></div></div>
                      <div className="row"><div className="col" style={styles.icon_subline}><h2>Kein Platz</h2></div></div>
                      <div className="row"><div className="col" style={styles.icon_text}><p>Bevor Du die Tasche auf den Boden legst und Leute darüber stolpern kannst du diese auch gleich sinnvoll verwenden!</p></div></div>
                          
                  </div>
                          
                  <div className="col-sm-3 p-3">
                          
                      <div className="row" style={styles.icon}><div className="col"><FaEye></FaEye></div></div>
                      <div className="row"><div className="col" style={styles.icon_subline}><h2>Nicht dein Stil</h2></div></div>
                      <div className="row"><div className="col" style={styles.icon_text}><p>Eher der auffällige oder schlichte Typ? Du hast die Freiheit Dir deine Laptoptasche zu gestalten wie du möchtest!</p></div></div>
                          
                  </div>
                          
                  <div className="col-sm-3 p-3">
                          
                      <div className="row" style={styles.icon}><div className="col"><FaAngleDoubleDown/></div></div>
                      <div className="row"><div className="col" style={styles.icon_subline}><h2>Hochmut kommt vor dem Fall</h2></div></div>
                      <div className="row"><div className="col" style={styles.icon_text}><p>Selten waren Laptops besser geschützt als mit dem Pillap. Durch die Polsterung ist der Laptop gut vor Stürzen geschützt.</p></div></div>
                          
                  </div>
                          
                    </div>

                  </div>
                </div>

            
            <div className="row" style={{...styles.box, ...styles.launch_box}}>

              <div className="col" style={styles.center_headline}>

                <h2 style={{...styles.magic_headline, ...styles.counter_section_headline}}>Pillap Launch</h2>

                <div className="row justify-content-md-center">

                  <div className="col-sm-6 pt-5">

                    <h3 className="pl-3 pr-3 pb-3 pt-4" style={styles.counter_text}>
                        Bald ist es soweit - der Launch unserer innovativen Laptoptasche steht bevor und wir können es kaum erwarten, sie dir vorzustellen.<br></br><br></br>
                        Melde dich für unseren exklusiven Counter an und sei einer der Ersten, die informiert werden, sobald unsere revolutionäre Laptoptasche verfügbar ist. 
                        Das Pillap-Team freut sich darauf, dich auf diesem spannenden Weg zu begleiten.<br></br><br></br> Sei Teil der Zukunft des mobilen Arbeitens und lass dich von unserer innovativen Laptoptasche begeistern.
                    </h3>

                  </div>

                  <div className="col-sm-5 p-3 m-3" style={{border: "#ed6524 solid 2px", borderRadius: "15px",}}>

                      <Newsletter></Newsletter>

                  </div>

                </div>

              </div>

            </div>

            

            <div className="row" style={{...styles.box, ...styles.bm_section}}>

              <div className="col-sm-12" style={styles.center_headline}>

              {this.state.matches && <h2 style={{...styles.magic_headline, ...styles.counter_section_headline}}>Unser Geschäftsmodell</h2>}

              <h2 style={{...styles.magic_headline, ...styles.counter_section_headline_sm}}>Unser Geschäftsmodell</h2>

                <div className="row">

                {this.state.matches && ( <div className="col-sm-6">

                    <LazyLoadImage style={{...styles.bm_image}} width={"80%"} height={"auto"} src={bm_image} alt="The Pillap Team in front of our Business Model"/>

                  </div>)}

                  <div className="col-sm-6">

                    <div className="col-sm-12">
                        <h3 style={styles.bm_headline}>Das Produkt</h3>
                          <p style={styles.bm_text}>Das Pillap ist vollständig in seine Einzelteile zerlegbar und wieder zusammenbaubar. Es wird zwei Standardversionen geben. Das Studenten-Modell ist die Basic Variante, bestehend aus Tasche inkl. Polster und Gurt. Außerdem gibt es das Premium Business-Modell mit weiteren Extras für Pendler und Außendienstmitarbeiter. Darüber hinaus hat man die Möglichkeit, sich seine Laptoptasche selbst zu konfigurieren. Du möchtest ein Unikat haben? Dann personalisiere dein Pillap mit Initialen, Namen oder einfachen Motiven.
                          </p>
                    </div>

                    <div className="col-sm-12">
                        <h3 style={styles.bm_headline}>Nachhaltigkeit</h3>
                          <p style={styles.bm_text}>
                          Für die Zukunft ist auch ein Abo-Modell geplant, bei dem man sich Bestandteile kurz- oder mittelfristig mieten kann. So bleibt man maximal flexibel. Auch eine Tauschbörse oder Kooperationen mit Repair-Cafes sind angedacht, damit wir die Nachhaltigkeit weiter ausbauen und nicht mehr verwendete Taschen nicht im Keller verstauben oder sogar im Müll landen. So befindet sich die Laptoptasche in einem ständigen erneuerbaren Recycling-Prozess und trägt einen Teil zum Umweltschutz bei.
                        </p>
                    </div>

                    <div className="col-sm-12">
                      <h3 style={styles.bm_headline}>Unsere Zielgruppe</h3>
                        <p style={styles.bm_text}>
                          Egal, ob du Arbeitnehmer, Student, Schüler oder einer anderen Gruppe angehörst, eines vereint unsere Kunden: Der Besitz von einem Laptop oder Tablet, auf das man Acht geben und schützen will. 
                        </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>


            <div className="row" style={{...styles.box, ...styles.testimonial_section}}>

              <div className="col" style={styles.center_headline}>

                <div className="row">

                  <div className="col">

                    <h2 style={{...styles.magic_headline, ...styles.counter_section_headline}}>Was unsere Community sagt...</h2>

                  </div>

                </div>

                <div className="row mb-3">

                  <div className="col">

                    <h3 style={styles.community_subheadline}>Was unsere Community zu unserer Laptophülle sagt</h3>

                  </div>

                </div>



                <div className="row justify-content-md-center" style={styles.testimonial_first_row}>

                <div className="col-sm-3 m-3" style={styles.testimonial_box}>

                    <div className="row">
                      <div clas="col">
                        <p style={styles.testimonial_text}>"Ich bin wirklich gespannt auf die Laptoptasche von Pillap. Die Idee, meinen Laptop sicher zu transportieren und das integrierte Sitzpolster während meiner Vorlesungen oder Meetings zu nutzen, klingt super praktisch. Ich freue mich darauf, die Tasche auszuprobieren und werde auf jeden Fall meine Erfahrungen teilen, sobald ich sie getestet habe."</p>
                      </div>
                    </div>

                    <div className="row">

                      <div className="col-6">
                        <LazyLoadImage style={styles.testimonial_pic} width={"65px"} height={"auto"} src={testimonial_one} alt="First Pillap Testimonial"></LazyLoadImage>  
                      </div>

                      <div className="col-6 pt-5" style={styles.testimonial_data}>
                        <span style={styles.testimonial_name}>Maximilian Urban</span>
                      </div>

                    </div>


                  </div>

                  <div className="col-sm-3 m-3" style={styles.testimonial_box}>

                    <div className="row">

                      <p style={styles.testimonial_text}>"Nachdem ich den Prototyp von Pillap in einer Vorlesung ausprobiert habe, war ich sehr positiv überrascht. Das Sitzpolster hat definitiv das Sitzgefühl verbessert und macht den Vorlesungssaal ein gutes Stück bequemer. Mir gefällt es, dass ich das Pillap flexibel als Abo auswählen kann und dass diese im Upcycling-Verfahren hergestellt werden sollen. Ich bin gespannt auf die weitere Entwicklung und freue mich darauf, die finale Version der Laptoptasche zu sehen!"</p>

                    </div>

                    <div className="row">

                      <div className="col">
                        <LazyLoadImage style={styles.testimonial_pic} width={"65px"} height={"auto"}  src={testimonial_two} alt="Second Pillap Testimonial"></LazyLoadImage>  
                      </div>

                      <div className="col pt-5">
                        <span style={styles.testimonial_name}>Sebastian Hofstetter</span>
                      </div>

                    </div>

                  </div>

                  <div className="col-sm-3 m-3" style={styles.testimonial_box}>

                    <div className="row">

                      <p style={styles.testimonial_text}>"Die Tasche gefällt mir wirklich. Gut gepolstert für den Laptop und bequem zum Sitzen. Ist leicht und doch flach"</p>

                    </div>

                    <div className="row">

                      <div className="col">
                        <LazyLoadImage style={styles.testimonial_pic} width={"65px"} height={"auto"}  src={julian_image} alt="Third Pillap Testimonial"></LazyLoadImage>
                      </div>

                      <div className="col">
                        <span style={styles.testimonial_name}>Mario von Bassen</span>
                      </div>

                    </div>

                  </div>

                </div>
                
                {/*
                <div className="row justify-content-md-center" style={styles.testimonial_second_row}>


                  <div className="col-sm-4 m-3" style={styles.testimonial_box}>

                    <div className="row">

                      <p style={styles.testimonial_text}>"Ein Produkt, auf das ich im Alltag nicht mehr verzichten möchte!"</p>

                    </div>

                    <div className="row">

                      <div className="col">
                        <LazyLoadImage style={styles.testimonial_pic} width={"65px"} height={"auto"}  src={julian_image} alt="Fourth Pillap Testimonial"></LazyLoadImage>
                      </div>

                      <div className="col">
                        <span style={styles.testimonial_name_two}>Mario von Bassen</span>
                      </div>

                    </div>

                  </div>

                  <div className="col-sm-4 m-3" style={styles.testimonial_box}>

                  <div className="row">

                    <p style={styles.testimonial_text}>"Einfach Top!"</p>

                  </div>

                    <div className="row">

                      <div className="col">
                        <LazyLoadImage style={styles.testimonial_pic} width={"65px"} height={"auto"}  src={julian_image} alt="Fived Pillap Testimonial"></LazyLoadImage>
                      </div>

                      <div className="col">
                        <span style={styles.testimonial_name_two}>Mario von Bassen</span>
                      </div>

                    </div>

                  </div>

                </div>
                */}

              </div>

            </div>


            <div className="row" style={{...styles.box, ...styles.idea_section}}>

              <div className="col" style={styles.center_headline}>

                <div className="row">

                  <div className="col-sm-12">

                    <h2 style={{...styles.magic_headline, ...styles.idea_section_headline}}>Wie die Idee entstand</h2>

                  </div>

                </div>

                <div className="row">
                  <div className="col-sm-12" style={styles.idea_section_intro}>
                    <p>Hast du nicht auch schon einmal im Vorlesungssaal gesessen und warst vom Vorabend noch so müde, dass du am liebsten deinen Kopf auf einer bequemen Unterlage abgelegt hättest? <br></br> <br></br>
                      Genau das ist einer unserer Kommilitoninnen passiert. Sie hat ihren Kopf auf den harten Tisch gelegt und versucht, für einen Moment zu entspannen, während ihre Laptoptasche nutzlos am Boden lag. Warum hat sie nicht einfach ihre Laptoptasche als komfortables Kissen verwendet?
                      Bei genauerer Betrachtung haben wir festgestellt, dass die Beschaffenheit der Laptoptasche mit ungünstig platzierten Reißverschlüssen und Halterungen nicht gerade bequem aussah - Schade drum… <br></br> <br></br>
                      Dann kam uns die geniale Idee: Warum entwickeln wir nicht ein innovatives Produkt, das aus den beiden simplen Gegenständen - Laptoptasche und Kissen - besteht? Dieses Produkt ermöglicht nicht nur eine bequeme Kopfablage, sondern ergänzt auch die harte Vorlesungsbank mit einer komfortablen Polsterung.
                      Mit dieser genialen Idee sind uns selbst in unterschiedlichsten Alltagssituationen weitere Vorteile eingefallen. Deshalb haben wir beschlossen, die Idee weiterzuverfolgen und umzusetzen.
                    </p>
                  </div>
                </div>

                <div className="row">

                  <div className="col">

                    <h2 style={{...styles.magic_headline, ...styles.idea_section_headline}}>Wer steckt hinter Pillap?</h2>

                  </div>

                </div>

                <div className="row mb-3 g-0" >

                  <div className="col-sm-6">
                    <LazyLoadImage style={styles.profile_pic} width={"50%"} height={"auto"} src={julian_image} alt="Julian Pillap Teammember"/>
                  </div>

                  {this.state.matches &&  <div className="col-sm-4" style={{padding: "0", margin: "0"}}>
                    <h2 style={styles.intro_name}>Julian</h2>
                    <p style={styles.intro_text}>Ich bin Julian, 25 Jahre alt und studiere ebenfalls E-Commerce an der THWS. Zuvor machte ich eine Ausbildung zum Industriekaufmann und sammelte 1,5 Jahre Berufserfahrung.
                        Mein Vorwissen aus der Berufstätigkeit hilft uns von der Entwicklung bis zum späteren Markteintritt. Aktuell fokussiere ich mich auf die Bereiche Einkauf, Supply Chain und Finance & Legal. Dabei bin ich auf der Suche nach geeigneten Lieferanten und Produktionsstätte, sowie einer nachhaltigen Logistikstrategie. Sobald Pillap marktreif ist, werde ich mich um die Anmeldung des Unternehmens kümmern.
                    </p>
                  </div>}

                  {!this.state.matches &&  <div className="col-sm-12">
                    <h2 style={styles.intro_name_sm}>Julian</h2>
                    <p style={styles.intro_text_sm}>Ich bin Julian, 25 Jahre alt und studiere ebenfalls E-Commerce an der THWS. Zuvor machte ich eine Ausbildung zum Industriekaufmann und sammelte 1,5 Jahre Berufserfahrung.
                        Mein Vorwissen aus der Berufstätigkeit hilft uns von der Entwicklung bis zum späteren Markteintritt. Aktuell fokussiere ich mich auf die Bereiche Einkauf, Supply Chain und Finance & Legal. Dabei bin ich auf der Suche nach geeigneten Lieferanten und Produktionsstätte, sowie einer nachhaltigen Logistikstrategie. Sobald Pillap marktreif ist, werde ich mich um die Anmeldung des Unternehmens kümmern.
                    </p>
                  </div>}

                </div>

                <div className="row mb-3 g-0">

                <div className="col-sm-6 pt-5">
                      <LazyLoadImage style={styles.profile_pic} width={"50%"} height={"auto"} src={pia_image} alt="Pia Weber Pillap Teammember"/>
                    </div>

                {this.state.matches &&  
                
                <div className="col-sm-4" style={{padding: "0", margin: "0"}}>
                    <h2 style={styles.intro_name}>Pia</h2>
                    <p style={styles.intro_text}>
                        Ich bin Pia, 23 Jahre alt und im 4. Semester meines E-Commerce-Studiums. Als erste Kauffrau im E-Commerce bringe ich eine abgeschlossene Ausbildung und umfassende Berufserfahrung im Bereich des digitalen Handels mit in das Pillap-Team ein!
                        Im Team stehe ich nicht nur für Kreativität, Nutzerfreundlichkeit, sondern auch für meine Leidenschaft und Expertise in der Websitegestaltung und im Social Media-Bereich. 
                        Darüber hinaus bin ich als Nachhaltigkeitsbeauftragte engagiert und strebe danach, ökologisch verantwortungsbewusste Materialien und Produktionsverfahren in die Entwicklung unserer Laptoptasche zu integrieren. Mein Ziel ist es, dass unsere Produkte nicht nur das mobile Arbeiten erleichtern, sondern auch einen positiven Einfluss auf die Umwelt haben.
                        Als Teil des Teams unterstütze ich leidenschaftlich dieses Projekt und freue mich darauf, unsere Vision voranzutreiben.
                    </p>
                  </div>
                  }

                    {!this.state.matches &&   
                    <div className="col-sm-6">
                    <h2 style={styles.intro_name_sm}>Pia</h2>
                    <p style={styles.intro_text_sm}>
                        Ich bin Pia, 23 Jahre alt und im 4. Semester meines E-Commerce-Studiums. Als erste Kauffrau im E-Commerce bringe ich eine abgeschlossene Ausbildung und umfassende Berufserfahrung im Bereich des digitalen Handels mit in das Pillap-Team ein!
                        Im Team stehe ich nicht nur für Kreativität, Nutzerfreundlichkeit, sondern auch für meine Leidenschaft und Expertise in der Websitegestaltung und im Social Media-Bereich. 
                        Darüber hinaus bin ich als Nachhaltigkeitsbeauftragte engagiert und strebe danach, ökologisch verantwortungsbewusste Materialien und Produktionsverfahren in die Entwicklung unserer Laptoptasche zu integrieren. Mein Ziel ist es, dass unsere Produkte nicht nur das mobile Arbeiten erleichtern, sondern auch einen positiven Einfluss auf die Umwelt haben.
                        Als Teil des Teams unterstütze ich leidenschaftlich dieses Projekt und freue mich darauf, unsere Vision voranzutreiben.

                    </p>
                    </div>}

                </div>

                <div className="row mb-3 g-0">

                <div className="col-sm-6 pt-5">
                  <LazyLoadImage style={styles.profile_pic} width={"50%"} height={"auto"} src={mario_image} alt="Mario von Bassen Pillap Teammember"/>
                  </div>

                 {this.state.matches &&   
                  <div className="col-sm-4" style={{padding: "0", margin: "0"}}>
                      <h2 style={styles.intro_name}>Mario</h2>
                        <p style={styles.intro_text}>Ich bin Mario und studiere im 6.Semester E-Commerce an der THWS mit Schwerpunkt IT-Security.
                                  Im Projekt bin ich vorrangig für alles Technische und das Projektmanagement zuständig, aber ich bin mit Leidenschaft auch immer bei kleineren Designaufgaben dabei.
                              Das Technische bezieht sich z.B. auf die eingebaute Technik in unserem Pillap, aber auch auf die Implementierung der Web-Oberfläche oder das Konzipieren von neuartigen Technologien im Zusammenhang mit unserem Geschäftsmodell.
                              Neben der THWS bin ich beruflich Software Engineer bei CGI in Frankfurt und setze mich in diesem Bereich vor allem mit innovativen Projekten auseinander. Wichtig ist dabei jedoch immer, dass diese Projekte, wie auch das Pillap, einen kreativen Anteil besitzen.
                              Es werden in Zukunft noch viele spannende Themen folgen. Da kannst du (dich), wie auf das Pillap, drauf setzen!
                        </p>
                      </div>}

                  {!this.state.matches &&  
                    <div className="col-sm-6">
                      <h2 style={styles.intro_name_sm}>Mario</h2>
                        <p style={styles.intro_text_sm}>Ich bin Mario und studiere im 6.Semester E-Commerce an der THWS mit Schwerpunkt IT-Security.
                                  Im Projekt bin ich vorrangig für alles Technische und das Projektmanagement zuständig, aber ich bin mit Leidenschaft auch immer bei kleineren Designaufgaben dabei.
                              Das Technische bezieht sich z.B. auf die eingebaute Technik in unserem Pillap, aber auch auf die Implementierung der Web-Oberfläche oder das Konzipieren von neuartigen Technologien im Zusammenhang mit unserem Geschäftsmodell.
                              Neben der THWS bin ich beruflich Software Engineer bei CGI in Frankfurt und setze mich in diesem Bereich vor allem mit innovativen Projekten auseinander. Wichtig ist dabei jedoch immer, dass diese Projekte, wie auch das Pillap, einen kreativen Anteil besitzen.
                              Es werden in Zukunft noch viele spannende Themen folgen. Da kannst du (dich), wie auf das Pillap, drauf setzen!
                        </p>
                      </div>}
                    
        
                </div>

              </div>

            </div>


            <div className="row" style={{...styles.box, ...styles.faq_section}}>

              <div className="col" style={styles.center_headline}>

              <h2 style={{...styles.magic_headline, ...styles.counter_section_headline}}>Hast du noch Fragen?</h2>

                <div className="row">

                  <div className="col" style={styles.accordion}>

                    <AlwaysOpenExample/>

                  </div>

                </div>

              </div>

            </div>

            <div className="row justify-content-md-center pt-5 mb-5" style={styles.center_headline}>

              <div className="col-sm-6" > 


                    <Newsletter></Newsletter>
                     
                  </div>

                </div>
          </div>
          
        )
    }
}

