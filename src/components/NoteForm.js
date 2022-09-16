import React, { Component } from 'react';
import{ connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            id: ''
        }
    }

    componentWillMount(){
        if(this.props.editItem && !this.props.isAdd){
           console.log(this.props);
           this.setState({
            noteTitle: this.props.editItem.noteTitle,
            noteContent: this.props.editItem.noteContent,
            id: this.props.editItem.id
           });
        }
        else{
            this.resetForm();
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.editItem && !nextProps.isAdd){
            console.log(nextProps);
            this.setState({
                noteTitle: nextProps.editItem.noteTitle,
                noteContent: nextProps.editItem.noteContent,
                id: nextProps.editItem.id
            });
        }
        else{
            this.resetForm();
        }
    }

    resetForm = () => {
        this.setState({
            noteTitle: '',
            noteContent: '',
            id: ''
        });
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    addOrEditNote = (title, content) => {
      
        if(title === '' || title === undefined || title === null 
        || content === '' || content === undefined || content === null ){
           return alert("Please fill all fields");
        }
        var obj = {}
        obj.noteTitle = title;
        obj.noteContent = content;

        if(this.state.id){
            obj.id = this.state.id;
            this.props.editNote(obj);
            this.props.alertOn("Update successfully", "success");
        }
        else
        {           
            this.props.addDNote(obj);
            this.props.alertOn("Create successfully", "success");
        }
    }

    showTitleForm = () => {
        if(this.props.isAdd){
           return( <h3>Add Note</h3>);
        }
        else{
            return( <h3>Edit Note</h3>);
        }
    }

    render() {
        return (
            <div className="col-4">
               {this.showTitleForm()}
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Note title</label>
                        <input value = {this.state.noteTitle} onChange={(event) => {this.isChange(event)}} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Note title" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Fill note title in here</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Note content</label>
                        <textarea value = {this.state.noteContent} onChange={(event) => {this.isChange(event)}} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="Note content"/>
                        <small id="helpIdNoteContent" className="form-text text-muted">Fill note content in here</small>
                    </div>

                    <div align="center">
                        <button onClick={() => {this.addOrEditNote(this.state.noteTitle, this.state.noteContent)}} type="button" className="btn btn-primary" style={{width: '50%'}}>Save</button>
                        <button onClick={this.props.closeForm} type="button" className="btn btn-warning" style={{width: '50%'}}>Close</button>
                    </div>

                </form>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        isAdd: state.isAdd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDNote: (item) => {
            dispatch({type: "ADD_NOTE", item})
        },
        editNote: (item) => {
            dispatch({type: "EDIT_NOTE", item})
        },
        alertOn: (alertContent, alertType) => {
            dispatch({type: "ALERT_ON", alertContent, alertType})
        },
        alertOff: () => {
            dispatch({type: "ALERT_OFF"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);