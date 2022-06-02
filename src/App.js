import React , { useState, useEffect, useContext }  from 'react';
import './App.css';
import Layout from './Layout';


const themes={
  red: {
    variant: 'outline-danger',
    name: 'Red'
  },
  blue: {
    variant: 'outline-primary', 
    name: 'Blue'
  }
};
const [theme, setTheme] = useState(themes.blue);



function App() {

  return (
   
     <ThemeContext.Provider value={{setTheme:setTheme, theme:theme}}>
       <Layout/>
       </ThemeContext.Provider>
  );
}

export default App;
