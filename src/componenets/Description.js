import React from 'react'
import Tags from './Tags'

export default function Description ({description}) {
    return (
        <div>
            <div className='col-8 mt-3 mb-3 ms-5 me-5'>
                <p className="lead">
                    <Tags/>
                    <div className='row ms-2'>
                        {description}
                    </div>
                </p>
            </div>
        </div>
    )
}