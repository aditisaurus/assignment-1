import React from 'react';
import './App.css';
import Header from './Header';
import Product from './Product';


function App() {
  return (
    <div className="app">

      {/*Header*/}
        <Header />

        {/*Products*/}
        <Product />

    </div>
  );
}

export default App;
