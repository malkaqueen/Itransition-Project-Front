import React from "react";
import {connect} from "react-redux";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import Alert from "./Alert";

// сюда примем массив из комментов, которые потом будем обрабатывать подобно постам из проекта владилена

const Comments = ({comments}) => {
    return (
        <div className='ps-5 ms-3'>
            <div className='row'>
                <div className="page-header">
                    <h3 className="reviews">
                        Comments
                    </h3>
                </div>
            </div>
            <CommentForm/>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        comments: state.company.comments
    }
}

export default connect(mapStateToProps)(Comments)