import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/card-style.css'

export default function CompanyCard({ company }) {
    const shortDescription = company.description.substring(0, 100) + "..."
    const date = new Date(company.expirationDate)
    const until = date.toLocaleDateString()
    const pathToCompany = `/company/${company.id}`

    return (
        <Link to={pathToCompany} params={{ companyId: company.companyId}} className='text-decoration-none'>
        <div className='card bonus text-center'>
            <div className='overflow'>
                <img
                    src={company.photoUrl}
                    alt=''
                    className='card-img-top'
                    style={{
                        objectFit: 'none',
                        objectPosition: 'center',
                        maxWidth: '100%',
                        maxHeight: '250px',
                        marginBottom: '1rem'
                    }}
                />
            </div>
            <div className='text-dark'>
                <h5>{company.title} {company.averageRating}</h5>
                <p className='row justify-content-center'>
                    <p className='col-6'>
                        {company.currentSum} / {company.targetSum} $
                    </p>
                    <p className='col-6'>
                        until {until}
                    </p>
                </p>
                <small className='text-secondary'>
                    {shortDescription}
                </small>
                {/* <a href='#' className='btn btn-outline-success'>Buy</a> */}
            </div>
        </div>
        </Link>
    )
}