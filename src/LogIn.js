import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from './componenets/app/NavBar'
import { Link, Redirect } from 'react-router-dom'
import { showAlert, login, loginValidate } from './redux/actions'
import Alert from './componenets/app/Alert'

export default function LogIn({ value = 0, onChange }) {
    const dispatch = useDispatch()
    const isValidated = useSelector(state => state.login.isValid)
    const alert = useSelector(state => state.app.alert)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    function updateEmail(event) {
        setEmail(event.target.value);
        if (typeof onChange === 'function') {
            onChange(event.target.value);
        }
    }

    function updatePass(event) {
        setPass(event.target.value);
        if (typeof onChange === 'function') {
            onChange(event.target.value);
        }
    }

    if (isValidated === false) {
        dispatch(showAlert('Email or Password is invalid'))
        dispatch(loginValidate(null))
    }

    if (isValidated)
        return <Redirect to='/' />

    return (
        <div>
            <NavBar />
            <div className='conatiner m-5'            >
                <form className='form-group mb-2 row col-3'>
                    <div className='form-group'>
                        <label for='exampleInputEmail1'>Email address</label>
                        <input
                            type='email'
                            value={email}
                            className='form-control'
                            id='exampleInputEmail1'
                            aria-describedby='emailHelp'
                            placeholder='Enter email'
                            onChange={updateEmail}
                        />
                        <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                    </div>
                    <div className='form-group'>
                        <label for='exampleInputPassword1'>Password</label>
                        <input
                            type='password'
                            value={pass}
                            className='form-control'
                            id='exampleInputPassword1'
                            placeholder='Password'
                            onChange={updatePass}
                        />
                    </div>
                </form>
                {alert && <Alert text={alert} />}
                <button
                    type='submit'
                    className='btn btn-primary'
                    onClick={() => {
                        dispatch(login(email, pass))
                    }
                    }
                >Log In</button>
                <small id='emailHelp' className='form-text text-muted m-2'>New here?
                        <Link to='/register'>
                        Register
                        </Link>
                </small>
            </div>
        </div>
    )
}