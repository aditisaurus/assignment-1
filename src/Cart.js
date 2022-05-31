import React from 'react'
import { Row,Col , ListGroup, Button} from 'react-bootstrap';


import './Cart.css';

function Cart() {
  return (
   <>
     <Row className="cart">
       <Col>
        <h2 className="float-left">Cart</h2>
        </Col>
        <Col> 
        <h2 className="float-end"> 2 Items </h2>
        </Col>
        <ListGroup className="product-name">
        <ListGroup.Item>Product</ListGroup.Item>
      </ListGroup>
        </Row>  
        <div className="checkout-button">
    <div className="d-grid gap-2">
  <Button variant="danger" >
    CheckOut
  </Button>
  </div>
  
    </div>
   </>
  
     
  
   
        
         
  
   
  )
}

export default Cart