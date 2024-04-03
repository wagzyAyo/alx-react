import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear , getFooterCopy} from './utils'

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
        <label for='email'>Email</label>
        <input type='email' ></input>
        <label for='password'>Password</label>
        <input type='password' ></input>
        <button ttpe='submit'>Ok</button>
      </div>
      <hr></hr>
      <div className="App-footer">
        <em>
        <p>Copyright {getFullYear()}- {getFooterCopy(true)}</p>
        </em>
      </div>
    </div>
  );
}

export default App