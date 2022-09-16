import React, { Component } from 'react';
import{ connect } from 'react-redux'
import '../App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import AlertInfo from './AlertInfo';

class App extends Component {

  showForm = () => {
    if(this.props.isShowForm){
      return <NoteForm/>
    }
  }

  render(){

      return (
        <div>
          <Nav/>
          <AlertInfo></AlertInfo>
          <div className="container">
              <div className="row">
                    <NoteList/>
                    {this.showForm()}
              </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isShowForm: state.isShowForm
  }
}

export default connect(mapStateToProps)(App);
