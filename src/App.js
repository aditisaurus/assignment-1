import React , { useState, useEffect }  from 'react';
import './App.css';
import {makeServer} from './Server';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Product from './Product';
import Cart from './Cart.js';
import {Row,Col} from 'react-bootstrap';


function App() {

  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products)
      })
  }, [])


  return (
    <div className="app">

      {/*Header*/}
        <Header />

    <div >
       <Row>
          <Col md={6}>
          
        <Product products={products}/>
    
              
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
