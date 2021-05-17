import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/card-style.css'
import { buyBonus } from '../../redux/actions'

export default function Bonus({ bonus }) {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.user.userId)

    return (
        <div className='card bonus text-center'>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{bonus.title}</h4>
                <p className='card-text text-secondary'>
                    {bonus.description}
                </p>
                <button
                    className='btn btn-outline-success'
                    onClick={() => dispatch(buyBonus(userId, bonus.id, bonus.companyId))}
                >Buy for {bonus.bonusSum}$</button>
            </div>
        </div>
    )
}