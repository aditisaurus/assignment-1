import React from 'react'
import './Product.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import  InputGroup  from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


function Products() {
  return (
    <div className="products">
      <InputGroup className="search-input">
    <FormControl
      placeholder="Enter product name here"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
     <Button variant="outline-secondary" id="button-addon2">
      Button
    </Button></InputGroup>
    </div>
  )
}

export default Products