import React, { Component } from 'react';
import { noteData } from '../connection/FirebaseConnect';
import NoteItem from './NoteItem';

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }

     componentWillMount() {
        noteData.on('value', (dataSnapshot) => {
            var arrayData = [];
            dataSnapshot.forEach((element) => {
                const key = element.key;
                const noteTitle = element.val().noteTitle;
                const noteContent = element.val().noteContent;
                arrayData.push({
                    id: key,
                    noteTitle: noteTitle,
                    noteContent: noteContent
                })
            });

            this.setState({
                data: arrayData
              });
          });
    }


    getData = () => {
        if(this.state.data.length > 0){
            return this.state.data.map((value, key) => {
                return(
                    <NoteItem 
                    key = {key}
                    index = {key + 1}
                    note = {value}
                    >
                    </NoteItem>
                )
            })
        }

    }

    render() {
        return (

            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>

        );
    }
}

export default NoteList;