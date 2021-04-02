import React, { Component } from 'react';
import '../App.css';
//import Header from './Header';
import TaskList from '../containers/TaskList';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Header/>*/}
                <TaskList/>
                <Footer/>
            </div>
        );
    }
}

export default App;