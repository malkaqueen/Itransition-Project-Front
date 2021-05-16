import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from './componenets/app/NavBar'
import { Redirect } from 'react-router-dom'
import RegisterImage from './componenets/register/RegisterImage'
import { showAlert, register } from './redux/actions'
import Alert from './componenets/app/Alert'

export default function Register({ value = 0, onChange }) {
    const dispatch = useDispatch()
    const alert = useSelector(state => state.app.alert)
    const photo = useSelector(state => state.register.photo)

    const [logged, setLogged] = useState(false)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [pass2, setPass2] = useState('')
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')

    function validateForm() {
        let isValid = true
        const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const passReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        if (!emailReg.test(String(email).toLowerCase())) {
            dispatch(showAlert('Email is invalid'))
            isValid = false
        }

        else if (!passReg.test(String(pass))) {
            dispatch(showAlert('Password should contain: 1 digit, 1 uppercase char, 1 lowercase char, special symbol'))
            isValid = false
        }
        else if (pass !== pass2) {
            dispatch(showAlert('Passwords do not match'))
            isValid = false
        }
        else if (!firstName.trim()) {
            dispatch(showAlert('First name cannot be empty'))
            isValid = false
        }
        else if (!secondName.trim()) {
            dispatch(showAlert('Second name cannot be empty'))
            isValid = false
        }
        return isValid
    }

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

    function updatePass2(event) {
        setPass2(event.target.value);
        if (typeof onChange === 'function') {
            onChange(event.target.value);
        }
    }

    function updateFirstName(event) {
        setFirstName(event.target.value);
        if (typeof onChange === 'function') {
            onChange(event.target.value);
        }
    }

    function updateSecondName(event) {
        setSecondName(event.target.value);
        if (typeof onChange === 'function') {
            onChange(event.target.value);
        }
    }

    if (logged)
        return <Redirect to='/registration_process'/>

    return (
        <div>
            <NavBar />
            <div className='conatiner m-5'>
                <form className='form-group mb-2 row col-3'>
                    <div className='mb-4'>
                        <div className='form-group'>
                            <label for='firstName'>First Name</label>
                            <input
                                type='text'
                                value={firstName}
                                className='form-control'
                                id='firstName'
                                aria-describedby='emailHelp'
                                placeholder='First Name'
                                onChange={updateFirstName}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label for='secondName'>Second Name</label>
                            <input
                                type='text'
                                value={secondName}
                                className='form-control'
                                id='secondName'
                                aria-describedby='emailHelp'
                                placeholder='Second Name'
                                onChange={updateSecondName}
                            />
                        </div>
                        <RegisterImage />
                        <hr className='ms-1' />
                    </div>
                    <div className='form-group'>
                        <label for='imputEmail'>Email address</label>
                        <input
                            type='email'
                            value={email}
                            className='form-control'
                            id='imputEmail'
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
                    <div className='form-group'>
                        <label for='exampleInputPassword1'>Repeat Password</label>
                        <input
                            type='password'
                            value={pass2}
                            className='form-control'
                            id='exampleInputPassword1'
                            placeholder='Password'
                            onChange={updatePass2}
                        />
                    </div>
                </form>
                {alert && <Alert text={alert} />}
                <button
                    type='submit'
                    className='btn btn-primary'
                    onClick={() => {
                        if (validateForm())
                        {
                            dispatch(register(firstName, secondName, photo, email, pass))
                            setLogged(true)
                        }
                    }}
                >Register</button>
            </div>
        </div>
    )
}