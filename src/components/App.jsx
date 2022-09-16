import logo from '../assets/logo.png';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from '../pages/connexion/inputSignUp';
import LogIn from '../pages/connexion/inputLogIn';
import Header from './Header'
import React, {Fragment} from 'react';
function App() {
  return (
    <Router>
      <Fragment>

      <Header />
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Connectez vous</p>
        </header>
        </div>
          <Routes>
            <Route path="/connexion" element={<LogIn />}>
            </Route>
            <Route path="/registre">
              <SignUp />
            </Route>
            {/* <Route>
              <Error />
            </Route> */}
          </Routes>
          </Fragment>
      
    </Router>
    
  );
}

export default App;
