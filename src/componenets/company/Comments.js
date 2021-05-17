import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { fetchComments } from '../../redux/actions'

export default function Comments({ companyId, userId }) {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments.comments)
    const userRole = useSelector(state=>state.user.role)

    useEffect(() => {
        dispatch(fetchComments(companyId, userId))
    }, [companyId, dispatch, userId])

    return (
        <div className='ps-5 ms-3'>
            <hr />
            <div className='row'>
                <div className='page-header'>
                    <h3 className='reviews'>
                        Comments
                    </h3>
                </div>
            </div>
            <hr />

            {(userRole === 'USER') &&
            <CommentForm companyId={companyId} />
            }
            {(comments.length)
                ?
                comments.map(comment => <Comment comment={comment} key={comment.id} />)
                :
                <label>No comments yet</label>
            }
        </div>
    )
}
