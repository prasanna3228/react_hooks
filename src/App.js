
import './App.css';
import Counter from './Counter';
import FunctionalForm from './FunctionalForm';
import Namevalidation from './Validatename';
import FunctionalCounter from './functinalCounter';
import Useeffects from './useeffects/useeffects';
import Usestate from './usestate';
const App=() =>{
  
  
  
  return (
    <div className="App">
      <header className="App-header">
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
        
         
      </header>
    </div>
  );
}

export default App;
