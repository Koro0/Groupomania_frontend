import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/App.css';
import Header from './Header';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Connectez vous</p>
          <Header />
        </header>
      </div>

    </Router>

  );
}

export default App;
