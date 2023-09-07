import './App.css';
import Joblist from './components/Joblist';



function App() {
  return (
    <div className="myApp">
      <div className='header'>
        <div>
          <h2>devjobs</h2>
        </div>
        <div>
        
        </div>
      </div>
      <div className='joblist'>
        <Joblist />
      </div>
    </div>
  );
}

export default App;
