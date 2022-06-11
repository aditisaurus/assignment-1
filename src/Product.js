import {React, useState, useContext, useEffect} from 'react'
import './Product.css';
import {Button,InputGroup,FormControl, ListGroup}from 'react-bootstrap';
import ThemeContext from './ThemeContext';


function Products ({products,setProducts, setRadioValue}) {
  const handleSearch = (event) =>{
    const  name = event.target.value;
    const newFilter = products.filter((value) => {
          return value.name.toLowerCase().includes(name.toLowerCase())
    });

    if(name === "") {
      setProducts(products);
    }
    else {
      setProducts(newFilter);
    }
    
  }

  const {theme} = useContext(ThemeContext);

  useEffect(() => {
  },[theme]
  )
  


const [cartItems, setCartItems] = useState([]);
const onAdd= (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist) {
    setCartItems(
      cartItems.map((x)=>
      x.id === product.id ? { ...exist, qty: exist.qty+1 } : x)
    );
  }
  else {
    setCartItems([...cartItems, {...product, qty: 1}]);
  }
};


  return (
    <div className="products">
      <InputGroup className="search-input">
    <FormControl onChange={(event) =>handleSearch(event)}
      placeholder="Enter product name here"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
     <Button variant={theme.variant==='danger' ? 'primary' : 'danger'} id="button-addon2">
      Search
    </Button></InputGroup>

    <div className="product-list">
    {products.map((product) => (
      <>
      <InputGroup.Checkbox className="checkbox" aria-label= {product.completed}/>
       <ListGroup>
           <ListGroup.Item key={product.id}>{product.name}</ListGroup.Item>
        </ListGroup>
  
      
      </>
))}
    </div>

    <div className="add-to-cart-button">
    <div className="d-grid gap-2">{
      theme&&
  <Button variant = {theme.variant==='danger' ? 'primary' : 'danger'} onClick="onAdd">
    Add to Cart
  </Button>
}
  </div>


    </div>
    
    


    </div>
  )
}

export default Products