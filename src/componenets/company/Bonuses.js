import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Bonus from './Bonus'
import {fetchBonuses} from '../../redux/actions'

export default function Bonuses({companyId}) {
    const dispatch = useDispatch()
    const bonuses = useSelector(state=>state.company.bonuses)
    useEffect(() => {
        dispatch(fetchBonuses(companyId))
    }, [companyId, dispatch])

    return (
        <div>
            <h4 className='ms-5 mb-2 text-center'>Project Bonuses</h4>
            <div className='container-fluid  d-flex justify-content-center m-5'>
                <div className='row'>
                    <div className='col-4'>
                        <Bonus />
                    </div>
                    <div className='col-4'>
                        <Bonus />
                    </div>
                    <div className='col-4'>
                        <Bonus />
                    </div>
                </div>
            </div>
        </div>
    )
}