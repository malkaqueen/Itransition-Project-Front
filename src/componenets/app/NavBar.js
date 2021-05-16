import React from 'react'
import { useSelector } from 'react-redux'
import Search from './Search'
import { Link } from 'react-router-dom';

export default function NavBar() {
    const userId = useSelector(state => state.user.userId)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
            <a href='/' className="navbar-brand col-lg-4 col-md-4 col-sm-6 ps-5 ms-3 desc">
                <h1>
                    <img src="food.png" alt="" width="30" height="24"
                        className="d-inline-block align-text-center" />
                    Funduk
                </h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse col-lg-2 col-md-3 col-sm-5 desc justify-content-right" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link
                            to='/my_companies'
                            className='nav-link'
                        >My Projects</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">My Bonuses</a>
                    </li>
                    <li className="nav-item">
                        <Search />
                    </li>
                </ul>
            </div>
            <div className='col-lg-2 col-md-3 col-sm-5 desc'>

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
                    <div>
                        <button className='btn btn-outline-info m-2'>Log Out</button>
                    </div>

                }
            </div>
        </nav>
    )
}