import React from 'react'
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import './Product.css';
import Button from 'react-bootstrap/Button';
import  InputGroup  from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';



  const Products = () => {
    const products = useSelector((state)=> state.products);
  

  return (
    <div className="products">
      <InputGroup className="search-input">
    <FormControl
      placeholder="Enter product name here"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
     <Button variant="outline-secondary" id="button-addon2">
      Search
    </Button></InputGroup>

    <div className="product-list">
      {products.map((product) => (<ProductItem id={product.id} title={product.title} completed={product.completed} />))}
   
    </div>
    <div className="add-to-cart-button">
    <div className="d-grid gap-2">
  <Button variant="primary" >
    Add to Cart
  </Button>
  </div>
    </div>
    
    


    </div>
  )
}

export default Products