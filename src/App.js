import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Product from './Product';
import Cart from './Cart.js';
import {Row,Col} from 'react-bootstrap';


function App() {
  return (
    <div className="app">

      {/*Header*/}
        <Header />


<div >
<Row>
<Col md={6}>
    <Product />
    </Col>  
    <Col md={6}>  


    <Cart />
    </Col>  
</Row>
</div>
      
    </div>
  );
}

export default App;
