import React from 'react'
import { connect } from 'react-redux'
import { showAlert, postComment } from "../../redux/actions";
import Alert from '../app/Alert'

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
            return this.props.showAlert('Comment cannot be empty')
        }

        this.props.postComment(text, this.props.companyId, this.props.userId)
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
                <div className='row col-6 '>
                    {this.props.alert && <Alert text={this.props.alert} className='row col-6' />}

                    <div className='mb-3'>
                        <input
                            type='text'
                            className='form-control'
                            id='text'
                            value={this.state.text}
                            name='text'
                            onChange={this.changeInputHandler}
                        />
                    </div>
                </div>
                <button className='btn btn-success' type='submit'>Post</button>
            </form>)
    }
}

const mapDispatchToProps = {
    postComment, showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert,
    userId: state.user.userId
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
