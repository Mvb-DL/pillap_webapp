import * as React from "react";
import { connect} from 'react-redux';


export class UserCheckOut extends React.Component {

  constructor(props) {

    super(props);
    
    this.state = { 
        uri: "",
        show: true,
        };
  }


  render() {

    const cart_items = this.props.items

    return (

        <div className="container">

        </div>
    )

  }
}


const mapStateToProps = state =>{

    return{
        items: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(UserCheckOut)