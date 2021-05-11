import React from 'react'
import {connect} from 'react-redux'
import {showAlert, createComment} from "../redux/actions";
import Alert from './Alert'

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {text} = this.state

        if (!text.trim()) {
            return this.props.showAlert('Post title cannot be empty')
        }

        const newComment = {
            text, id: Date.now().toString()
        }

        this.props.createComment(newComment)
        this.setState({text: ''})
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prv => ({
            ...prv, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>

                {this.props.alert && <Alert text={this.props.alert}/>}

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.text}
                        name='title'
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className='btn btn-success' type='submit'>Post</button>
            </form>)
    }
}

const mapDispatchToProps = {
    createComment, showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
