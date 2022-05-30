import React from 'react'
import './Header.css';
import CircleIcon from '@mui/icons-material/Circle';

function Header() {
  return (
    <div className="header">
      
      <div className="blue-button">
        <CircleIcon />
        <p>blue</p>
      </div>

      <div className="red-button">
      <CircleIcon />   
      <p>red</p>       
          </div>
        
    </div>
  )
}

export default Header