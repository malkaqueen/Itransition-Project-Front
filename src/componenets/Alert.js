import React from 'react'

export default ({text})=>{
    return(
        <div className="alert alert-danger" role="alert">
            {text}
        </div>
    )
}