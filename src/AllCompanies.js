import React from 'react'
import NavBar from './componenets/app/NavBar'
import AllCompaniesList from './componenets/allCompanies/AllCompaniesList'

export default function AllCompanies() {
    return (
        <div>
            <NavBar />
            <div className='container m-5 p-2 bg-gradient-info text-dark'>
                All Companies
            </div>
            <AllCompaniesList />
        </div>
    )
}