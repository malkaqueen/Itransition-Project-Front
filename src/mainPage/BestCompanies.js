import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBestComps } from '../redux/actions'
import CompanyCard from './CompanyCard'

export default function BestCompanies() {
    const dispatch = useDispatch()
    const bestComps = useSelector(state => state.main.bestCompanies)
    useEffect(() => {
        dispatch(fetchBestComps())
    }, dispatch)

    return (
        <div className='container'>
            <h2>
                Best Companies
            </h2>
            <div className='d-flex justify-content-center m-5'>
            {bestComps.map(company => <CompanyCard
                id={company.id} 
                company={company} 
                className='m-2'
                />)}
            </div>
        </div>
    )
}