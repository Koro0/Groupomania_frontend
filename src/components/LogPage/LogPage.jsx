import { Dialog } from 'primereact/dialog';
import React, { useState } from 'react';
import Login from './connexion/inputLogIn';
import Register from './registre/inputSignUp'
import logo from '../../assets/logo.png'



export default function LogPage() {
    const [displayLogin, setDisplayLogin] = useState(false);
    const [displayRegister, setDisplayRegister] = useState(false);

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