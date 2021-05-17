import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from './componenets/app/NavBar'
import { Link, Redirect } from 'react-router-dom'
import MyCompaniesList from './componenets/myCompanies/MyCompaniesList'

export default function MyCompanies() {
    const userRole = useSelector(state=>state.user.role)

    if (userRole !== 'USER' && userRole !== 'ADMIN')
        return (
            <Redirect to='/log_in'/>
        )

    return (
        <div>
            <NavBar />
            <div className='container m-5 p-2 bg-gradient-info text-dark'>
                <Link to='/create'>
                    <button className='btn btn-primary'>
                        Create Company
                    </button>
                </Link>
            </div>
            <MyCompaniesList />
        </div>
    )
}