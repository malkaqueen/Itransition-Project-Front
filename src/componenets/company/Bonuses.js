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
            <h4 className='ml-5 mr-5 mb-2 text-center'>Project Bonuses</h4>
            <div className='container-fluid  d-flex justify-content-center m-5'>
                <div className='row'>
                    {bonuses.map(bonus=>
                        <Bonus
                        key = {bonus.id}
                        bonus = {bonus}
                        className='col-3'
                        />)

                    }
                </div>
            </div>
        </div>
    )
}