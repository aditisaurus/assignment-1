import React , {useEffect, useContext} from 'react'
import { Row,Col , ListGroup, Button} from 'react-bootstrap';
import './Cart.css';
import ThemeContext from './ThemeContext';



function Cart({cartItems, setCartItems}) {

  const {theme} = useContext(ThemeContext);
  
 const emptyCart = () => {
    setCartItems([]);
}

  useEffect(() => {
    console.log(cartItems," CartItems")
  },[theme,cartItems]
  )

  return ( 
   <>
     <Row className="cart">
       <Col>
        <h2 className="float-left">Cart</h2>
        </Col>
        <Col> 
        <h2 className="float-end">{cartItems?.length>0?cartItems?.length+" items":"Your Cart is Empty!"}</h2>
        </Col>
               <ListGroup className="product-name">
        {cartItems?.map((cartItem) => (
        <ListGroup.Item id={cartItem.id}>{cartItem.name}</ListGroup.Item>
        ))}
      </ListGroup>
                  </Row>  
        <div className="checkout-button">
    <div className="d-grid gap-2">
  <Button variant= {theme.variant==='danger' ? 'primary' : 'danger'} onClick={emptyCart}>
    CheckOut
  </Button>
  </div>
  
    </div>
   </>
   
  )
}

export default Cart