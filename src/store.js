import { noteData } from './connection/FirebaseConnect';

var redux = require('redux');
const noteInitialState = {
    isShowForm: false,
    isAdd: false,
    editItem: {},
    isShowAlert: false,
    alertContent: '',
    alertType: ''
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            noteData.push(action.item);    
            return {...state, isShowForm: false}
        case "EDIT_NOTE":
            noteData.child(action.item.id).update({
                'noteTitle': action.item.noteTitle, 
                'noteContent': action.item.noteContent
            });
            return {...state, editItem: {}, isShowForm: false}
        case "SHOW_FORM":
            return {...state, isShowForm: true}
        case "CLOSE_FORM":
            return {...state, isShowForm: false}
        case "CHANGE_ADD_STATUS":
            return {...state, isAdd: action.isAdd}
        case "GET_EDIT_ITEM":
            console.log(action.editItem);
            return {...state, editItem: action.editItem}
        case "DELETE_NOTE":
            noteData.child(action.item.id).remove();
            return {...state, isShowForm: false}
        case "ALERT_ON":
            return {...state, isShowAlert: true, alertContent: action.alertContent, alertType: action.alertType}
        case "ALERT_OFF":
            return {...state, isShowAlert: false}
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

// store.subscribe(function(){
//     console.log(store.getState());
// });

export default store;

