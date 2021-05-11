import React from 'react'
import Bonus from './Bonus'

export default () => {
    return (
        <div>
            <h4 className='ms-5 mb-2 text-center'>Project Bonuses</h4>
            <div className='container-fluid  d-flex justify-content-center m-5'>
                <div className='row'>
                    <div className='col-4'>
                        <Bonus/>
                    </div>
                    <div className='col-4'>
                        <Bonus/>
                    </div>
                    <div className='col-4'>
                        <Bonus/>
                    </div>
                </div>
            </div>
        </div>
    )
}