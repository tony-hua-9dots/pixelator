import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {colorPicked} from '../actions/index';
import { ButtonToolbar } from 'react-bootstrap';

class ColorPalette extends React.Component {

    render () {
        return (
            <div className = "center">
                <ButtonToolbar>
                <button className = "btn btn-default" onClick = { () => this.props.colorPicked("red")} >
                Red
                </button>
                <button className = "btn btn-default" onClick = { () => this.props.colorPicked("blue")} >
                Blue
                </button>
                <button className = "btn btn-default" onClick = { () => this.props.colorPicked("green")} >
                Green
                </button>
                <button className = "btn btn-default" onClick = { () => this.props.colorPicked("yellow")} >
                Yellow
                </button>
                <button className = "btn btn-default" onClick = { () => this.props.colorPicked("purple")} >
                Purple
                </button>
                <button className = "btn btn-default" onClick = { () => this.props.colorPicked("brown")} >
                Brown
                </button>
                <button className = "btn btn-default" onClick = { () => this.props.colorPicked("orange")} >
                Orange
                </button>
                </ButtonToolbar>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        color: state.color
        
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        colorPicked: colorPicked},
         dispatch)
    
}

export default connect (mapStateToProps, matchDispatchToProps)(ColorPalette);