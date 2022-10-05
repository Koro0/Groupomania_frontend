import { Dialog } from 'primereact/dialog';
import React, { useState } from 'react';
import Login from '../../pages/connexion/inputLogIn';
import Register from '../../pages/registre/inputSignUp'


export default function Header() {
  const [displayLogin, setDisplayLogin] = useState(false);
  const [displayRegister, setDisplayRegister] = useState(false);

  return (
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
  )
}
// tranferrer sur une nouvelle page
// creer un nouveau Header ou 
// masquer le header apres connexion, afficher une nav bar pour comte et deconnexion