import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTasks, deleteTask } from '../actions/taskActions';

class TaskList extends Component {
    componentDidMount() {
        this.props.getTasks();
    }

    handleClick = (id) => () => {
        setTimeout(() => this.props.deleteTask(id), 1000);
    }

    render() {
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);