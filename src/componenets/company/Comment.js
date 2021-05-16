import React from "react"
import Likes from './Likes'

export default function Comment ({comment}) {

    return (
        <div className='mb-3'>
            <cite>{`${comment.authorName} on ${comment.creationDatetime}:`}</cite>
            <div className='card row col-6'>
                <div className=''>
                    <h5 className='card-title'>{comment.content}</h5>
                    <Likes 
                    likes = {comment.likesCount} 
                    liked = {comment.liked}
                    />
                </div>
            </div>
        </div>
    )
}