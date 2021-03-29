import * as actionTypes from '../constants/ActionTypes';
import { Record } from 'immutable';

const InitialState = Record({
    taskList: []
})

const initialState = new InitialState();

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return state.set("taskList", state.taskList.push({
                title: action.taskList,
                hours: action.taskList
            }))
        
        case actionTypes.GET_TASK:
            return state.set("taskList", action.taskList)

        case actionTypes.DELETE_TASK:
            return state.set("taskList", state.taskList.filter(task=>task.id !== action.id))
        
        default: return state
    }
}

export default tasks;