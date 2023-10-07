
import './App.css';
import Counter from './Counter';
import Useeffects from './useeffects/useeffects';
import Usestate from './usestate';

const App=() =>{
  
  
  
  return (
    <div className="App">
      <header className="App-header">
      <h3>useState codes</h3>
       <div className='container'> 
       <Counter/>
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
