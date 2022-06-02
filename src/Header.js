import {React, useState, useContext} from 'react'
import './Header.css';
import {Button, ButtonGroup, ToggleButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {

  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Red', value: '1' },
    { name: 'Blue', value: '2' } 
  ];

  function changeTheme(value){
    setRadioValue(value)
    
  }
  

  return (
    <div className="header">
      
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-primary' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => changeTheme(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
        
    </div>
    
  )
}



export default Header