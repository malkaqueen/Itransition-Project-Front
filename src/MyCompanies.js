import React from 'react'
import NavBar from './componenets/app/NavBar'
import { Link } from 'react-router-dom'

export default function MyCompanies() {
    return (
        <div>
            <NavBar />
            <Link to='/create'>
                <button className='btn btn-primary'>
                    Create Company
            </button>
            </Link>
        </div>
    )
}