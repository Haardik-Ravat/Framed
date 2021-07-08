import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} 
  style={{
    backgroundImage: 'url(https://pbs.twimg.com/media/DpPhfnFUcAcxs4D.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover'
  }}
  />
    </div>
  );
}

export default App;
