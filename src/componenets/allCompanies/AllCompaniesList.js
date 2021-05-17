import React from 'react'
import { useSelector } from 'react-redux'
import CompanyCard from '../mainPage/CompanyCard'

export default function AllCompaniesList () {
    const allComps = useSelector(state => state.all.companies)

    if (!allComps)
        return(<div>
            Loading...
        </div>)

    return (
        <div className='container'>
            <div className='d-flex justify-content-center m-5'>
                {allComps.map(company => <CompanyCard
                    id={company.id}
                    company={company}
                    className='m-2'
                />)}
            </div>
        </div>
    )
}