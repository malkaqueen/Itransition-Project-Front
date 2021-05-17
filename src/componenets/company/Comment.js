import React from "react"
import Likes from './Likes'

export default function Comment ({comment}) {
    const date = new Date(comment.creationDatetime).toLocaleString()

    return (
        <div className='mb-3'>
            <cite>{`${comment.authorName} on ${date}:`}</cite>
            <div className='card row col-6'>
                <div className=''>
                    <h5 className='text-secondary'>{comment.content}</h5>
                    <Likes 
                    likes = {comment.likesCount} 
                    liked = {comment.liked}
                    />
                </div>
            </div>
        </div>
    )
}