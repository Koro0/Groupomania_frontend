import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import '../../../styles/connexion.css';

export default function Login() {
  const [showMessage, setShowMessage] = useState(false);

  const defaultValues = {
    email: '',
    password: '',
  };



  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const [goToHome, setgoToHome] = useState(false);
  if (goToHome) {
    return <Navigate to='/Home' />
  }

  /**
   * 
   * @param {Call API} data 
   */
  const onSubmit = (data) => {
    fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        localStorage.setItem('connect', JSON.stringify(data));
        setShowMessage(true);
      })
      .catch((error) => {
        console.error('Error:', error);

      });

    reset();
  };



  const handleSubmitButton = () => {
    setShowMessage(false);
  }

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
  };

  //const navigate = useNavigate();
  const handleOnClick = () => {
    setShowMessage(false);
    setgoToHome(true);
  };
  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => handleOnClick()}
      />,
    </div>
  );



  return (
    <div className="form-demo">
      <Dialog
        visible={showMessage}
        onHide={() => handleSubmitButton()}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ '960px': '80vw' }}
        style={{ width: '30vw' }}
      >
        <div className="flex justify-content-center flex-column pt-6 px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: '5rem', color: 'var(--green-500)' }}
          ></i>
          <h5>Login Successful!</h5>
        </div>
      </Dialog>


      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">LogIn</h5>
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: 'Email is required.',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Invalid email address. E.g. example@email.com',
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      className={classNames({
                        'p-invalid': fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="email"
                  className={classNames({ 'p-error': !!errors.email })}
                >
                  Email*
                </label>
              </span>
              {getFormErrorMessage('email')}
            </div>
            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: 'Password is required.' }}
                  render={({ field, fieldState }) => (
                    <Password
                      id={field.name}
                      {...field}
                      toggleMask
                      className={classNames({
                        'p-invalid': fieldState.invalid,
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="password"
                  className={classNames({ 'p-error': errors.password })}
                >
                  Password*
                </label>
              </span>
              {getFormErrorMessage('password')}
            </div>

            <Button type="submit" label="Login" className="mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
}
