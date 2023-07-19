import React, { Component } from 'react';
import { DeleteCart, loadCart } from '../../actions/cart';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaRegTrashAlt } from 'react-icons/fa';


export function totalAmount(cart_items){

    let totalPrice = 0

    for( let i=0; i < cart_items.length; i++){

        totalPrice += +cart_items[i]["price"]
    }

    return totalPrice

}

export class UserCart extends Component {

    constructor(props) {

        super(props)

    }

    static propTypes = {
        loadCart: PropTypes.func.isRequired,
      };
    


    render() {

        const styles = {

            payment_button : {
                backgroundColor: "#FFE600",
                color: "#fff",
                border: "none"
            },

            cart_product_image: {
                width: "100px",
                height: "100px",
                borderRadius: "5%",
                marginTop: "5%"
            },

            product_price: {
                fontWeight: "bold",
                fontSize: "1.2em"
            },

            cart_product: {
                backgroundColor: "#fff",
                
            },

            icon: {
                width: "20px",
                height: "20px"
            }

        }

        const cart_items = this.props.cart_items

        if(cart_items.length !== 0){

            return (

                <div className="container">

                    <div className="row justify-content-center mt-5">

                        <div className='col-md-8'>

                        <h1 className='text-center pb-4'>Warenkorb</h1>

                        <hr></hr>

                            <div className='mt-5 pb-4'>

                            {   
                                cart_items.map((product, index)=>(


                                    <div key={index} className="m-4">
                                        
                                        <div className='row cart_product' style={styles.cart_product}>

                                            <div className='col-2'>
                                                <img src={product.product_image_link} className="cart_product_image" style={styles.cart_product_image}/>                                             
                                            </div>

                                            <div className='col-6'>
                                                <p>{product.description}</p>
                                                <span className='product_price' style={styles.product_price}>{product.price}</span>
                                            </div>

                                            <div className='col-2 mt-4'>
                                                <span><FaRegTrashAlt onClick={DeleteCart} style={styles.icon}/></span>
                                            </div>
                                
                                        </div>
                                    </div>
                                ))
                            }
                                
                           </div>

                           <hr></hr>

                        </div>
                        

                        <div className='col-md-4 mt-5'>

                            <div className="row pt-5">

                                <div class="col-12 text-right">

                                    <h3>Zwischensumme: {totalAmount(cart_items)} €</h3>

                                </div>

                            </div>

                            <div className='row'>

                                <div class="col-12 text-right">
                            
                                    <Link className='btn btn-primary cart_button mt-3' to="/user_check_out" style={styles.payment_button}>Zur Kasse gehen</Link>

                                </div>
                            
                            </div>

                        </div>

                                        
                    </div>

                    <div class="row mt-2">

                        <div class="col-4 text-left">

                            <span><h3>Anzahl Items</h3></span>

                        </div>

                        <div class="col-4 text-right">

                            <span><h3>{cart_items.length}</h3></span>

                        </div>

                    </div>

                </div>
        
        )

        }

    };

};


const mapStateToProps = state =>{

        return {
            cart_items: state.cart.cartItems,
        };
      }
    

     
export default connect(mapStateToProps, loadCart)(UserCart)