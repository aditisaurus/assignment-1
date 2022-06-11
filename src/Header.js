import {React, useState, useContext} from 'react'
import './Header.css';
import {Button, ButtonGroup, ToggleButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContext from './ThemeContext';

function Header() {

  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Red', value: '1' },
    { name: 'Blue', value: '2' } 
  ];

  const {theme,setTheme,alltheme} = useContext(ThemeContext);

  function changeTheme(value){
    console.log("Value is ",value)
    setRadioValue(value)
    if(value==2){
      setTheme(alltheme.red)
    }
    else{
      setTheme(alltheme.blue)
    }

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



export default Header;