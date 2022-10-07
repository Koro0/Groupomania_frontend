import { Dialog } from 'primereact/dialog';
import React, { useState } from 'react';
import Login from '../../pages/connexion/inputLogIn';
import Register from '../../pages/registre/inputSignUp'
import logo from '../../assets/logo.png'
import Navbar from './Navbar/Navbar'


export default function Header() {
  const [displayLogin, setDisplayLogin] = useState(false);
  const [displayRegister, setDisplayRegister] = useState(false);
  const [isLogIn, setDiseableHeader] = useState(false);
  const userID = JSON.parse(localStorage.userId);
  console.log(userID);
  if (userID != null) { setDiseableHeader(!isLogIn) };

  return (

    <div div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Connectez vous</p>

        <nav>
          <button onClick={() => setDisplayLogin(true)}>Login</button>
          <Dialog header="Login" visible={displayLogin} style={{ width: '50vw' }} onHide={() => setDisplayLogin(false)}>
            <Login />
          </Dialog>
          <button onClick={() => setDisplayRegister(true)}>Register</button>
          <Dialog header="Register" visible={displayRegister} style={{ width: '50vw' }} onHide={() => setDisplayRegister(false)}>
            <Register />
          </Dialog>
        </nav>
      </header>
    </div>
  )
}