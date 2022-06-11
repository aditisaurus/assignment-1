import React , { useState, useEffect, useContext }  from 'react';
import './App.css';
import Layout from './Layout';
import ThemeContext from './ThemeContext';


const themes={
  red: {
    variant: 'danger',
    name: 'Red'
  },
  blue: {
    variant: 'primary', 
    name: 'Blue'
  }
};

function App() {

  const [theme, setTheme] = useState(themes.blue);
  const [alltheme, setAllTheme] = useState(themes)

  return (
   
     <ThemeContext.Provider value={{setTheme:setTheme, theme:theme, alltheme:alltheme}}>
       <Layout/>
       </ThemeContext.Provider>
  );
}

export default App;
