import React from 'react'
import "./ProductItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  InputGroup  from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';

function ProductItem({id, title, completed}) {
  


  return (
    <div className="product-item">
<InputGroup.Checkbox className="checkBox" aria-label={completed} />
  
  <ListGroup className="product-name">
  <ListGroup.Item>{title}</ListGroup.Item>
</ListGroup>

    </div>
    )
}

export default ProductItem