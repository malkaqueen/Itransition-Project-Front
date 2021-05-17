import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecentComps } from '../../redux/actions'
import CompanyCard from '../mainPage/CompanyCard'

export default function BestCompanies() {
    const dispatch = useDispatch()
    const recComps = useSelector(state => state.main.recentCompanies)
    useEffect(() => {
        dispatch(fetchRecentComps())
    }, [dispatch])

    return (
        <div className='container'>
            <h2>
                Recent Companies
            </h2>
            <div className='d-flex justify-content-center m-5'>
            {recComps.map(company => <CompanyCard
                id={company.id} 
                company={company} 
                className='m-2'
                />)}
            </div>
        </div>
    )
}