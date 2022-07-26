import React, { Component } from "react";
import classes from './Modal.module.css';
import Aux from "../../../HOC/Auxilliary/auxilliary";
import BackDrop from "../BackDrop/BackDrop";

class Modal extends Component {
    // shouldComponentUpdate( nextProps, nextState ) {
    //     return nextProps.show !== this.props.show;
    // }
    // componentWillUpdate( nextProps, nextState ) {
    //     console.log('[Modal] WillUpdate');
    // }

    render(){
        return(
    <Aux>
        <BackDrop show={this.props.show} clicked={this.props.modalclosed}/>
    <div 
        className={classes.Modal}
        style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1': '0'
        }}>
            {this.props.children}
    </div>
    </Aux>
        )
    }
}

export default Modal;