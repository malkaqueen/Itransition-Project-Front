import React from 'react'

export default function Photo({photo}) {
    return (
        <div className='row mb-5 ps-5 ms-3'>
            <img src={photo}
                alt=''
                className='img-fluid img-responsive'
                resizeMode={'cover'}
                style={{
                    maxWidth: '300px'
                }}
            />
        </div>
    )
}