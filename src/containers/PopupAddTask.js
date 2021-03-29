import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';

class PopupAddTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            hours: ""
        }
    }

    handleSubmit = () => {
        console.log(this.state.title + ", " + this.state.hours);
    }

    handleClick = () => {
        if(
            this.state.title.trim() !== "" &&
            this.state.hours > 0
        )
            this.props.addTask(this.state.title, this.state.hours);
        else
            alert("You have empty fields, hours field must be greater then 0.")
    }

    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleChangeHours = (e) => {
        this.setState({
            hours: e.target.value
        })
    }

    submitClasses() {
        let classes = this.state.title.length === 0 && this.state.hours.length === 0 ? "btn btn-empty" : "btn";
        return classes;
    }

    render() {
        return (
            <div className='modal-wrap js-modal'>
                <div className='modal js-modal-inner'>
                    <h2>Create a task:</h2>
                    <form onSubmit = {this.handleSubmit}>
                        <div className='field-wrap'>
                            <label className='label' for='title'>Title:</label>
                            <input className='field' id='title' name='title' type='text' required value={this.state.title} onChange={this.handleChangeTitle}/>
                        </div>
                        <div className='field-wrap'>
                            <label className='label' for='hours'>Hours:</label>
                            <input className='field' id='hours' name='hours' type='number' required value={this.state.hours} onChange={this.handleChangeHours}/>
                        </div>
                        <div className='btn-wrap align-right'>
                            <input className={this.submitClasses()} type='submit' value='Create' onClick={this.handleClick}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (title, hours) => {
            dispatch(addTask(title,hours))
        }
    }
}

export default connect(null, mapDispatchToProps)(PopupAddTask);