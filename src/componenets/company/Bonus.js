import React from 'react'
import '../../styles/card-style.css'

export default function Bonus () {
    return (
        <div className='card bonus text-center'>
            <div className='overflow'>
                <img
                    src='https://kpopchart.net/wp-content/uploads/2021/03/Chanyeol-The-Box-e1616555084675.jpg'
                    alt=''
                    className='card-img-top'/>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>Card Title</h4>
                <p className='card-text text-secondary'>
                    lorem201
                </p>
                <a href='#' className='btn btn-outline-success'>Buy</a>
            </div>
        </div>
    )
}