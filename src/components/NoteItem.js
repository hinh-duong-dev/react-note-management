import React, { Component } from 'react';
import{ connect } from 'react-redux';

class NoteItem extends Component {

    editNote = () => {
        this.props.showForm();
        this.props.changeAddStatus(false);
        this.props.getEditItem(this.props.note); 
    }

    deleteNote = (item) => {
        this.props.deleteNote(item);
        this.props.alertOn("Delete " + item.noteTitle + " successfully", "info");
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id={"noteW" + this.props.index}>
                    <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#noteList" href={"#note" + this.props.index} aria-expanded="true" aria-controls="nodeContent1">
                        {this.props.note.noteTitle}
                    </a>
                    <div className = "btn-group float-right">
                          <button className = "btn btn-outline-info" onClick = {this.editNote}> &nbsp;Edit &nbsp;</button>
                          <button onClick={() => {this.deleteNote(this.props.note)}} className = "btn btn-outline-secondary">Delete</button>
                    </div>
                    </h5>
                </div>
                <div id={"note" + this.props.index} className="collapse in" role="tabpanel" aria-labelledby={"noteW" + this.props.index}>
                    <div className="card-body">
                    {this.props.note.noteContent}
                    </div>
                </div>
           </div>
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
    getEditItem: (item) => {
        dispatch({type: "GET_EDIT_ITEM", editItem: item})
    },
    deleteNote: (item) => {
        dispatch({type: "DELETE_NOTE", item})
    },
    changeAddStatus: (status) => {
        dispatch({type: "CHANGE_ADD_STATUS", isAdd: status})
    },
    alertOn: (alertContent, alertType) => {
        dispatch({type: "ALERT_ON", alertContent, alertType})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);