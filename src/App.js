
import './App.css';
import Sub from './components/Sub/Sub';
import Add from './components/Add/Add';
import Multi from './components/Multi/Multi';

function App() {
  return (
   <div>
     <h1>React project</h1>
  

  <Add a='8' b='2' ></Add>
  <Sub a='10' b='8' />
  <Multi a = '5' b = '5' />
   </div>
  );
}

export default App;
