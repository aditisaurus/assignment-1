import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { makeServer } from "./Server"
import {useState} from 'react'
import ThemeContext from './ThemeContext'

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

const container = document.getElementById('root');
const root = createRoot(container);
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




root.render(
  <React.StrictMode>
     <ThemeContext.Provider value={{setTheme:setTheme,
     theme:theme
    }}>
      <App />
      </ThemeContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
