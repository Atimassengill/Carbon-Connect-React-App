
import React from 'react';
import Navbar from './Com/Navbar';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import './App.css';
import Home from './Com/pages/Home';
import Resources from './Com/pages/About';
import Nasa from './Com/pages/Nasa';
import CCIA from './Com/pages/CCIA';
import Climate from './Com/pages/Climate';
import Gov from './Com/pages/Gov';


function App() {
  return (
    
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= 
          {Home} />
          <Route path='/Resources' exact component= 
          {Resources} />
          <Route path='/Nasa' exact component= 
          {Nasa} />
          <Route path='/CCIA' exact component= 
          {CCIA} />
          <Route path='/Climate' exact component=
          {Climate} />
          <Route path='/Gov' exact component=
          {Gov} />
          

        </Switch>
      </Router>
      
    </>
  );
}

export default App;
