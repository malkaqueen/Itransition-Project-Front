import React from "react";
import Likes from './Likes'

export default ({comment}) => {
    return (
        <div className='mb-3'>
            <cite>{`AuthorName AuthorSurname on 10.10.2021:`}</cite>
            <div className='card row col-6'>
                <div className=''>
                    <h5 className='card-title'>{comment.text}</h5>
                    <Likes/>
                </div>
            </div>
        </div>
    )
}