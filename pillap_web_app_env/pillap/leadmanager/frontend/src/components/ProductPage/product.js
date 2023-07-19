import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CreateCart } from '../../actions/cart';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Suspense } from "react";
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';


function ProductItems(props) {

    let var_products = localStorage.getItem("products");

    const products = JSON.parse(var_products)

    const { id } = useParams();

    const nft_product = products.products.find(product => {

            return product.id === id

    });

    const Model = () => {

        const gltf = useLoader(GLTFLoader, nft_product.model_link);
      
        return (
          <>
            <primitive object={gltf.scene} scale={2} />
          </>
        );
      };

    const styles = {

        login_info_text: {
            fontSize: "1.3em"
        },

        munich_map: {
            border: "none",

        },

        canvas: {
            width: "100%",
            height: 400,

        },

        container : {
            fontFamily: "GFS Didot, serif",
            marginTop: "2%"
        },

        product_price : {
            fontWeight: "600",
            fontSize: "1.5em"
        },

        under_section: {
            marginTop: "-5%"
        },

        cart_button : {
            backgroundColor: "#fff",
            border: "2px solid #FFE600",
            color: "#FFE600",
            width: "60%",
            height: "120%",
            marginTop: "-3%",
            fontSize: "1.3em"
        },

        scrollmenu: {
            overflow: "auto",
            whiteSpace: "nowrap"
        },

        scrollmenu_element: {
            display: "inline-block"
        }

    }
    
    const [show, setShow] = useState(false);

    const { isAuthenticated} = props.auth;

    const auth = (

        <div>

            <Alert show={show} variant="success" class="success_alert" style={styles.success_alert}>
                <Alert.Heading>Wurde dem Warenkorb hinzugefügt</Alert.Heading>
                <hr />
                <div className="d-flex justify-content-end">
                 <Link to="/user_marketplace"> <button onClick={() => setShow(false)} variant="outline-success" className='btn btn-primary cart_button m-2'>
                    Weiter einkaufen
                  </button></Link>
                  <Link to="/user_cart"> <button onClick={() => setShow(false)} variant="outline-success" className='btn btn-primary cart_button m-2' >
                    Zum Warenkorb
                  </button></Link>
                </div>
            </Alert>
                                
            {!show &&  <button className='btn btn-primary cart_button' style={styles.cart_button} 
                onClick={()=>{
                props.CreateCart(nft_product);
                setShow(true);
                }}>In den Warenkorb</button> }

        </div>
        
    )

    const guest = (
        <div>
            <Link to="/login" className="nav-link">
                <p style={styles.login_info_text}>Falls du das Munich Piece erweben möchtest melde dich an!</p>
            </Link>
        </div>
    )

    return (
        
            <Container className='container mb-5' style={styles.container}>

                    <div className='row mt-5'>

                        <div className='col-10 model_container'>
                            <Canvas className='canvas' style={styles.canvas}>
                                <Suspense fallback={null}>
                                    <Model />
                                    <OrbitControls />
                                    <Environment preset={"warehouse"} background />
                                </Suspense>
                            </Canvas>
                        </div>

                        <div className='col-2'>

                            <div className='row mb-2'>

                                <img src="https://picsum.photos/300/300" className="img-fluid" />

                            </div>

                            <div className='row'>

                                <img src="https://picsum.photos/300/315" className="img-fluid" />

                            </div>


                        </div>

                    </div>

                    <div className='row text-right'>

                        <div className='col-12'>

                            <div className='row mt-4'>

                                <div className='col-4 text-left'>

                                    <h1>{nft_product.name}</h1>

                                </div>

                                <div className='col-6 text-right'>

                                    <div className='product_price' style={styles.product_price}>Preis: {nft_product.price}€</div>

                                </div>

                            </div>

                            <div className='row mt-2 mb-5'>

                                <div className='col-6 '>
                                    <p className='text-justify'>{nft_product.description}</p>
                                </div>

                                <div className='col-4'>

                                    {isAuthenticated ? auth : guest}

                                </div>

                            </div>

                        </div>

                    </div>

                    <hr></hr>

                    <div className='row pb-5 pt-4'>

                        <div className='col-12'>

                            <h1 className='text-center'>Standort in München</h1>

                        </div>

                    </div>

                    <div className='row mt-5'>

                        <div className='col-6'>
                            <p>The size of monkeys varies between the pygmy marmoset, with a head-torso length of about 12 to 15 centimeters and a weight of about 100 grams, and the gorillas, which can grow up to 1.75 meters tall standing and reach a weight of 200 kilograms, and the humans, with an average height of 1.60 to 1.80 meters, and in individual cases more than 2.00 meters. Some species have pronounced sexual dimorphism, and males of some species can be twice as heavy as females and may also differ in fur color. Their bodies are usually covered with fur, the coloration of which can vary from black to various shades of brown and gray to white. The palms of the hands and soles of the feet are usually hairless, sometimes the face. The eyes are large and directed forward, which is accompanied by a good sense of sight. As dry-nosed primates, however, their sense of smell is underdeveloped.</p>

                        </div>

                        <div className='col-6'>
                        <p>By far the most populous ape species today is the human, with a worldwide population of 8 billion.[7] It has colonized all continents except Antarctica and is also the mammal with the largest population worldwide. The remaining ape species are distributed in the tropical and subtropical regions of the Americas, Africa and Asia, with the oldest fossil finds - for example, Eosimias - being around 45 million years old and recorded only from Asia. In the Americas, the monkeys' range extends from southern Mexico to northern Argentina.
                        </p>

                        </div>

                    </div>

                    <hr></hr>

                    <div className='row pt-4'>

                        <div className='col'>

                            <h1 className='pb-4'>Interessante Fakten</h1>

                            <ul>
                                <li>Der allgemeine Affe ist 7 Meter hoch</li>
                                <li>Er ist aber auch 3 Meter breit</li>
                                <li>Wir ähneln genetisch zu 97% einem Affen</li>
                            </ul>

                        </div>

                    </div>


                    <div className='row mt-5'>

                        <div className="col-12 mt-3">

                            <h2>Mehr aus der Sammlung</h2>

                        </div>

                        <div className='col-12 scrollmenu mt-5' style={styles.scrollmenu}>


                        {products.products.map((product, index)=>{

                                let id = product.id;

                                if(id !== nft_product.id){

                                    return(
                                
                                      <Link key={id} to={`/product/${id}`}>
                                        <img src={product.product_image_link} className='scrollmenu_element m-2' width="300" height="300"/>
                                      </Link>

                                    )

                                }

                        })}

                        <img src="https://picsum.photos/300/300" className='m-2'  />
                        <img src="https://picsum.photos/300/300" className='m-2' />

                        </div>

                    </div>

                    
   
            </Container>

        )

};


const mapStateToProps = state => {


    if(typeof state.products.products === 'undefined' || state.products.products.length < 1 ) {
        
      return {
        auth: state.auth,
        products: [],

    };
    }
    else {

      return {  auth: state.auth,
                products: state.products.products,
            };

    }
  }

function mapDispatchToProps(dispatch){
    
    return{

        CreateCart:product=>dispatch(CreateCart(product))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItems);