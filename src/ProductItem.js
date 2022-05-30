import React from 'react'
import "./ProductItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  InputGroup  from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function ProductItem({id, title, completed}) {
  


  return (
    <div className="product-item">
    <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label={title} />
    <FormControl aria-label={completed} />
  </InputGroup>
    </div>
    )
}

export default ProductItem