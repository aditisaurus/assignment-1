import React , {useEffect, useContext} from 'react'
import { Row,Col , ListGroup, Button} from 'react-bootstrap';
import './Cart.css';
import ThemeContext from './ThemeContext';



function Cart({products, onAdd}) {

  const {theme} = useContext(ThemeContext);

  useEffect(() => {
  },[theme]
  )

  return (
   <>
     <Row className="cart">
       <Col>
        <h2 className="float-left">Cart</h2>
        </Col>
        <Col> 
        <h2 className="float-end"> 2 Items </h2>
        </Col>
        {products?.map((product) => (
          <>
        <ListGroup className="product-name">
        <ListGroup.Item key={product.id}>Product</ListGroup.Item>
      </ListGroup>
      <Button onClick={()=> onAdd(product)} className="add-item" variant="primary">+</Button>{' '}
      <Button className="remove-item" variant="primary">-</Button>{' '}
      </>
      ))}
        </Row>  
        <div className="checkout-button">
    <div className="d-grid gap-2">
  <Button variant= {theme.variant==='danger' ? 'primary' : 'danger'}>
    CheckOut
  </Button>
  </div>
  
    </div>
   </>
   
  )
}

export default Cart