import React, { Component } from 'react';
import { Alert, AlertContainer } from 'react-bs-notifier';
import{ connect } from 'react-redux';

class AlertInfo extends Component {
    handleDismiss = () => {
        this.props.alertOff();
    }

    render() {
        if(this.props.isShowAlert){
            return (
                <AlertContainer>
                    <Alert type={this.props.alertType} onDismiss={() => this.handleDismiss()} timeout={2000}>{this.props.alertContent} </Alert>
                </AlertContainer>
            );
        }
        return (null)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isShowAlert : state.isShowAlert,
        alertContent: state.alertContent,
        alertType: state.alertType
    }
  }
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
            alertOff: () => {
                dispatch({type: "ALERT_OFF"})
            }
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo); 