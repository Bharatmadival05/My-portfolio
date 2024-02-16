import React from 'react';
import Body from '../src/components/jsx/Body';
import About from '../src/components/jsx/About';
import Services from '../src/components/jsx/Services';
import Portfolio from '../src/components/jsx/portfolio';
import Contact from './components/jsx/Contact';
import '../src/components/css/main.css';


function App() {
  return (
    <div className="App">
      <Body/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
