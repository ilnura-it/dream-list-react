
import './App.css';
import { Dream } from './Dream';
import image from './dream.png'



function App() {
  return (
    <div className="App">
     <div className='container'>
        <img className="dream" src={image} alt="dream" width="200px"/>
      </div>
      <div className='container'>
      <h1>My Dream List 2022</h1>
      </div>
      
      <Dream/>
       
    </div>
  );
}

export default App;

