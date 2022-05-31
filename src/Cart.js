import React from 'react'
import { Row,Col } from 'react-bootstrap';

import './Cart.css';

function Cart() {
  return (
   <Row>
       <Col>
        <h2 className="float-left">Cart</h2>
        </Col>
        <Col> 
        <h2 className="float-end"> 2 Items </h2>
        </Col>
        </Row>  
        
         
  
   
  )
}

export default Cart