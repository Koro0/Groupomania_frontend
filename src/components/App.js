import logo from '../assets/logo.png';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Connectez vous</p>
        <SignUp />
      </header>
    </div>
  );
}

export default App;
