import './App.css';
import Notification from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"

function App() {
  return (
    <ReactFragment>
      <Notification />
    <div className="App">
      <Header />
      <hr></hr>
      <Login />
      <hr></hr>
      <Footer />
    </div>
    </ReactFragment>
  );
}

export default App