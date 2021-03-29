import React, { Component } from 'react';
import Modal from 'react-modal';
import quotes from '../quotes.json';
import icon from '../icons/icon-plus.svg';
import icon2 from '../icons/icon-calendar.svg';
import logo from '../images/vegait-logo.svg';
import PopupAddTask from '../containers/PopupAddTask';
 
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curTime: new Date().toDateString(),
            isOpen: false
        }
    }

    toggleModal = () => {
        const { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen
        })
    }

    render() {
        const pickedQuote = quotes[Math.floor(Math.random() * quotes.length)];

        return (
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
                        </div>
                        </h1>
                    </div>  
                </header>
        )
    }
}

export default Header;