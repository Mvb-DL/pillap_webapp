import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { useLoader } from "@react-three/fiber";


export default class UserMarketPlace extends Component {

    render () {

    const Model = () => {

        const model_link = "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf";

        const gltf = useLoader(GLTFLoader, model_link);
      
        return (
          <>
            <primitive object={gltf.scene} scale={1} />
          </>
        );
      };


        const styles ={

            heading: {
                fontFamily: 'Magical Mystery Tour',
                fontSize: "3em"
            },

            product_container: {
                marginTop: "10%",
                marginBottom: "100px"
            },

            purchase_button: {
                backgroundColor: "#ed6524",
                border: "none",
                borderRadius: "10px",
                fontFamily: 'Magical Mystery Tour',
                width: "60%",
                maxWidth: "60%",
                height: "50px",
            },

            price_tag: {
                fontSize: "1.3em"
            }

            }

        

        return (

                    <div className="container" style={styles.product_container}>

                        <div className="row mt-5">

                            <div className='col-6'>

                            <Canvas className='canvas' style={styles.canvas}>
                                <Suspense fallback={null}>
                                    <Model />
                                    <OrbitControls />
                                    <Environment preset={"warehouse"} background />
                                </Suspense>
                            </Canvas>

                            </div>

                            <div className='col-5 ml-4'>

                                <div className='row'>
                                    <h1 style={styles.heading}>Das Pillap</h1>
                                </div>

                                <div className='row mb-2 mt-4'>
                                        <p>Die vielseitige Laptoptasche, die sich in ein komfortables Kissen verwandelt. Genießen Sie stilvolles Design und Funktionalität in einem Produkt. Perfekt für unterwegs, bietet Pillap Schutz für Ihren Laptop und verwandelt sich in ein bequemes Kissen, wenn Sie Entspannung benötigen. Unverzichtbar für den modernen Reisenden.</p>
                                 
                                </div>

                                <div className='row mb-2'>

                                    <p style={styles.price_tag}>40€ oder <Link to="/configurator">konfigurieren</Link></p>

                                </div>

                                <div className='row text-left'>

                                    <div className='col-6'>
                                        <button style={styles.purchase_button} className='btn btn-primary'>Kaufen</button>
                                        
                                    </div>

                                    <div className='col-6'>
                                        <Link to="/configurator"><button style={styles.purchase_button}  className='btn btn-primary'>Leasing</button></Link>
                                    </div>
                                </div>


                            </div>


                        </div>

                    </div>
            )
}

}