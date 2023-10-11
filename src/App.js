import React from 'react';

import './App.css';
import Useeffects from './useEffects/useeffects';
import Counter from './useStateS/Counter';
import FunctionalForm from './useStateS/FunctionalForm';
import Namevalidation from './useStateS/Validatename';
import FunctionalCounter from './useStateS/functinalCounter';
import Password from './useStateS/password';
import Usestate from './useStateS/usestate';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './Header';
import Setinterval from './useEffects/withArgument/setInterval';
import ApiIntegration from './useEffects/ApiIntegration/ApiIntegration';

const App=() =>{
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <div className='container'>
          <Password/>
        </div>
      <div className='container'>
          <Namevalidation/>
        </div>
        <div className='container'>
        <FunctionalForm/>
        </div>
      <h3>useState codes</h3>
       <div className='container'> 
       <Counter/>
       </div>
       <hr/>
      <div className='container'>
      <FunctionalCounter/>
      </div>
        <div className='container'>
        <Usestate/>
        </div>
        
        <h3>useEffect codes</h3>
        <div className='container'>
          <Useeffects/>
        </div>
        
      </header> */}
    {/* <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/usestate' Component={Usestates}/>
    </Routes>
    </BrowserRouter> */}
    <header className='App-header'>
      <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path='/counter' Component={Counter}/>
        <Route path='/password' Component={Password}/>
        <Route path='/functionalform' Component={FunctionalForm}/>
        <Route path='/functionalcounter' Component={FunctionalCounter}/>
        <Route path='/usestate' Component={Usestate}/>
        <Route path='/namevalidation' Component={Namevalidation}/>
        <Route path='/useeffect' Component={Useeffects}/>
        <Route path='/setinterval' Component={Setinterval}/>
        <Route path='apiintegration' Component={ApiIntegration}/>
      </Routes>
      
      </BrowserRouter>
     
   
    </header>
    
    </div>
  );
}

export default App;
