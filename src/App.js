import './App.css';
import Joblist from './components/Joblist';
// import fontawesome from './bars-solid.svg';


function App() {
  return (
    <div className="myApp">
      <div className='header'>
        <div className='headerContent'>
          <div className='headingText'>
            <h2>devjobs</h2>
          </div>
          <div className='mobileMenu'>
            <i className="fa-solid fa-bars" style={{color: '#ffffff'}}></i>
          </div>
        </div>
      </div>
      <div className='joblist'>
        <Joblist />
      </div>
    </div>
  );
}

export default App;
