import React from "react";
import { Button } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
class CartWidget extends React.Component {
    render() {
      return (<Button>
          <FaShoppingCart/>
        </Button>)
        
    }
  }

export default CartWidget;