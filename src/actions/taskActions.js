import axios from 'axios';
import * as actionTypes from '../constants/ActionTypes';

export function getTasks() {
    return function (dispatch) {        
        axios.get('https://localhost:44323/api/tasks')
            .then(response => {
                return dispatch({
                    type: actionTypes.GET_TASK,
                    taskList: response.data
                });
            })
    }    
}

export function getTasksForDate(date) {
    return function (dispatch) {        
        axios.get('https://localhost:44323/api/tasks/gettaskfordate' + { date })
            .then(response => {
                return dispatch({
                    type: actionTypes.GET_TASK,
                    taskList: response.data
                });
            })
    }    
}

export const addTask = (title, hours, date) => {
    return async (dispatch) => {
        const response = await axios.post('https://localhost:44323/api/tasks/CteateNewTask', { title, hours, date });
        dispatch({
            type: actionTypes.ADD_TASK,
            taskList: response.data
        });
    }
}

export const deleteTask = id => {
    return (dispatch) => {
        return axios.delete("https://localhost:44323/api/tasks/DeleteTask/" + id)
            .then(() => {
                dispatch({
                    type: actionTypes.DELETE_TASK,
                    id: id
                })
            })
    }
}
