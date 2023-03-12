import logo from './logo.svg';
import './App.css';
// import './Components/Header.css'
import Header from './Components/Header.js';
import MainOne from './Components/MainOne.js';
import MainTwo from './Components/MainTwo.js';
import MainThree from './Components/MainThree.js';
import Final from './Components/Final.js';

function App() {
  return (
    <div className="App">

   < Header/>

   <MainOne/>
   <MainTwo/>
   <MainThree/>
   <Final/>
    
    </div>
  );
}

export default App;
