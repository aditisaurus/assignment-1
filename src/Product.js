import {React,useContext, useEffect, useState} from 'react'
import './Product.css';
import {Button,InputGroup,FormControl,Form, ListGroup}from 'react-bootstrap';
import ThemeContext from './ThemeContext';


 function Products ({products,setProducts, setCartItems}) {

  const {theme} = useContext(ThemeContext);
  const [checkedList, setCheckedList] = useState([]);

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


const handleChange = (id) => {
  
  const checked =products.filter((product) => {
                  if(product.id === id)
                  {
                    return product
                  }
  });
  console.log(checkedList, " Checked")
  //const array =[checked];
   
        setCheckedList([...checkedList,...checked]);
       
    //console.log(checkedList);
}


const addToCart = () => {
    setCartItems(checkedList)
}

  useEffect(() => {
    console.log("Theme" , theme)
  },[theme]
  )
  


  return (
    <div className="products">
      <InputGroup className="search-input">
    <FormControl 
      placeholder="Enter product name here"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
     <Button variant={theme.variant==='danger' ? 'primary' : 'danger'} id="button-addon2" onClick={(event) =>handleSearch(event)}>
      Search
    </Button></InputGroup>

    <div className="product-list">
    {products.map((product) => (
      <div className="checkbox">
       <Form.Check aria-label="option 1"  id={product.id} onClick={() =>handleChange(product.id)}/>
       <ListGroup>
           <ListGroup.Item >{product.name}</ListGroup.Item>
        </ListGroup>
  
      
      </div>
))}
    </div>

    <div className="add-to-cart-button">
    <div className="d-grid gap-2">{
      theme&&
  <Button variant = {theme.variant==='danger' ? 'primary' : 'danger'} onClick={addToCart}>
    Add to Cart
  </Button>
}
  </div>
    </div>

    </div>
  )
}

export default Products;