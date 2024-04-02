import logo from './holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="App-header">
          <div><img src={logo} alt="logo" /></div>
          <div><h1>School dashboard</h1></div>
      </div>
      <hr></hr>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
      </div>
      <hr></hr>
      <div className="App-footer">
        <em>
        <p>Copyright 2020 - holberton School</p>
        </em>
      </div>
    </div>
  );
}

export default App