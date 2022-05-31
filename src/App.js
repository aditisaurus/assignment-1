import React , { useState, useEffect }  from 'react';
import { createServer } from "miragejs";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Product from './Product';
import Cart from './Cart.js';
import {Row,Col} from 'react-bootstrap';

let server = createServer()
server.get("/api/users", { users: [{ id: 1, name: "Bob", check: false }] })

function App() {
  let [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users)
      })
  }, [])

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
