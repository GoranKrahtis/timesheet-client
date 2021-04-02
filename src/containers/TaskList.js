import React, { Component } from 'react';
import { connect } from 'react-redux';
import { /*getTasksForDate,*/ deleteTask, getTasks } from '../actions/taskActions';
import Modal from 'react-modal';
import quotes from '../quotes.json';
import icon from '../icons/icon-plus.svg';
import icon2 from '../icons/icon-calendar.svg';
import logo from '../images/vegait-logo.svg';
import PopupAddTask from '../containers/PopupAddTask';

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curTime: new Date().toLocaleDateString(),
            isOpen: false/*,
            date: ""*/
        }
    }

    toggleModal = () => {
        const { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen
        })
    }

    componentDidMount() {
        this.props.getTasks();
        //this.props.getTasksForDate(this.state.date);
    }

    /*handleSubmit = () => {
        console.log(this.state.date);
    }*/

    handleChangeDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleClick = (id) => () => {
        setTimeout(() => this.props.deleteTask(id), 1000);
    }

    render() {
        const pickedQuote = quotes[Math.floor(Math.random() * quotes.length)];
        const { taskList } = this.props;
        const taskList1 = taskList && taskList.length ? (
            taskList.map(task => {
                return (
                    <div className="wrap" key = {task.id}>
                        <div className='item-row'>
                            <label className='check-flag'>
                                <span className="small-text-label">Title</span>
						        <span className="small-text-label hours">Hours</span>
                                <span className='check-flag-label'>{task.title}</span>
                                <span className='check-flag-label'>{task.hours}</span>
                            </label>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className='item-row'>
                <label className='check-flag'>
                    <span className='check-flag-label'>No tasks</span>
                </label>
            </div>
        );
        return (            
            <div>
                <header className='header'>
                    <div className='wrap'>
                        <span className='btn-icon'>
                            <img src={icon} className='icon icon-plus js-modal-init' alt='Add new item' onClick={this.toggleModal} />
                        </span>
                        <Modal isOpen={this.state.isOpen} onRequestClose={this.toggleModal} shouldCloseOnOverlayClick={true} ariaHideApp={false}>
                            <PopupAddTask/>
                        </Modal>

                        <div className='header-blackquote'>
                            <h1>
                                {pickedQuote.quoteText}
                            </h1>
                            <div className='header-cite'>
                                - {pickedQuote.author}
                            </div>
                        </div>                                              
                    </div>
                    <div className='header-inner'>
                        <h1 className='wrap'>
                        <img className="logo" src={logo} alt="VegaIT"/>
                        <div className="date-wrap">
                            <img className="icon" src={icon2} alt="calendar"/>
                            <time>{this.state.curTime}</time>
                            {/*<form onSubmit={this.handleSubmit} >
                                <input type="date" name="date" value={this.state.date} onChange={this.handleChangeDate} />
                                <input type="submit" value="Check tasks" className='btn-wrap align-right' onClick={this.props.getTasksForDate(this.state.date)}/>
                            </form>*/}
                        </div>
                        </h1>
                    </div>
                </header>
                {taskList1}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taskList: state.tasks.taskList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => {
            dispatch(deleteTask(id))
        },
        getTasks: () => {
            dispatch(getTasks())
        }/*
        getTasksForDate: (date) => {
            if(date != null)
                dispatch(getTasksForDate(date))
        }*/
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);