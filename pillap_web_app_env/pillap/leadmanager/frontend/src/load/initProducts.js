import { LOAD_PRODUCTS, LOADED_PRODUCTS, PRODUCT_ERROR} from "../actions/types";
import axios from 'axios';

function initProducts() {

    const outerArr = [];

    axios
      .get('cart/display_product')
      .then((res) => {

            const products = res.data

            const innerArr = Object.values(products);

            outerArr.push(...innerArr);

      })

      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: PRODUCT_ERROR,
        });
      });

    return outerArr
}



import React from 'react';


export default class PersonList extends React.Component {
    
  state = {
    products: []
  }

  componentDidMount() {
    axios.get('cart/display_product')
      .then(res => {
        const products = res.data;
        this.setState({ products });
        console.log(products)
      })
  }

  render() {
    console.log(this.state)
    return (
      <ul>
        {
          this.state.products
            .map(product =>
              <li key={product.id}>{product.name}</li>
            )
        }
      </ul>
    )
  }
}