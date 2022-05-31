import React from 'react'
import './Header.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {
  return (
    <div className="header">
      
      <div className="blue-button">
      <Button variant="primary">Blue</Button>{' '}

      </div>

      <div className="red-button">
      <Button variant="danger">Red</Button>{' '}
 
        </div>
        
    </div>
    
  )
}

export default Header