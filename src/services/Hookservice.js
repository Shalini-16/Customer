//this will use firebase database service to interact with firebase realtime database.
//it contais important functions of CRUD operation

import firebase from 'firebase';
const db = firebase.database().ref("/addhook");

//const db = firebase.ref("/addhook");
const getAll = () =>{
    return db;
}
const create = (data) =>{
    return db.push(data);
}
const update = (key, data) =>{
    return db.child(key).update(data);
}
const remove = (key) =>{
    return db.child(key).remove();
}
const removeAll = () =>{
    return db.remove();
}
export default {
    getAll,
    create,
    update,
    remove,
    removeAll,
}