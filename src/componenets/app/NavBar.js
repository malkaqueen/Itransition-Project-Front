import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Search from './Search'
import { Link, useHistory } from 'react-router-dom'
import { logout } from '../../redux/actions'

export default function NavBar() {
    const dispatch = useDispatch()

    const history = useHistory()

    const userId = useSelector(state => state.user.userId)
    const userName = useSelector(state => state.user.name)
    const userRole = useSelector(state => state.user.role)

    console.log(userId, userName)

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-4'>
            <a href='/' className='navbar-brand col-lg-4 col-md-4 col-sm-6 pl-5 ml-3 desc'>
                <h1>
                    <img src='food.png' alt='' width='30' height='24'
                        className='d-inline-block align-text-center' />
                    Funduk

                </h1>
            </a>
            <div className='collapse navbar-collapse col-lg-2 col-md-3 col-sm-5 desc justify-content-right' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                        <Link
                            to='/my_companies'
                            className='nav-link'
                        >My Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>My Bonuses</a>
                    </li>
                    <li className='nav-item'>
                        <Search />
                    </li>
                </ul>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-5 desc justify-content-right'>
                {(userName !== 'null') && <h5 style={{ color: 'white' }}>{userName}</h5>}
            </div>
            <div className='col-lg-3 col-md-3 col-sm-5 desc'>
                {(!userId)
                    ?
                    <div>
                        <Link to='/log_in'>
                            <button className='btn btn-outline-info m-2'>Log In</button>
                        </Link>
                        <Link to='/register'>
                            <button className='btn btn-outline-warning m-2'>Register</button>
                        </Link>
                    </div>
                    :
                    <div className='justify-content-right'>

                        {(userRole === 'ADMIN') &&
                            <Link to='/admin_page'>
                                <button
                                    className='btn btn-outline-warning'
                                >Manage Users</button>
                            </Link>
                        }

                        <Link to='/'>
                            <button
                                className='btn btn-outline-info m-2'
                                onClick={() => {
                                    dispatch(logout())
                                    history.push('/')
                                    history.go(0)
                                }
                                }
                            >Log Out</button>
                        </Link>
                    </div>
                }
            </div>
        </nav >
    )
}
