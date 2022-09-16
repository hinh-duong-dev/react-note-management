import React, { Component } from 'react';
import{ connect } from 'react-redux';
import AlertInfo from './AlertInfo';

class Nav extends Component {

    showForm = (event) => {
        event.preventDefault();
        this.props.showForm();
        this.props.changeAddStatus(true);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{backgroundColor: 'black'}}>
                <a className="navbar-brand" href="/">Notes Management</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={(event) => this.showForm(event)}>Add Note</a>
                    </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       
    }
  }
  
const mapDispatchToProps = (dispatch, ownProps) => {
return {
    showForm: () => {
        dispatch({type: "SHOW_FORM"})
    },
    changeAddStatus: (status) => {
        dispatch({type: "CHANGE_ADD_STATUS", isAdd: status})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);