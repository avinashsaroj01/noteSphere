// import React, { useContext, useEffect, } from 'react'
// import { NoteContext } from '../context/notes/NoteContext';
// import NoteItem from './NoteItem';
// import empty from '../images/empty.svg'
// import { useNavigate } from "react-router-dom";
// import { AlertContext } from '../context/AlertContext';


// function Notes() {

//     const { notes, getNotes } = useContext(NoteContext)
//     const navigate = useNavigate()
//     const { showAlert } = useContext(AlertContext)

//     useEffect(() => {
//         if (localStorage.getItem('token')) {
//             getNotes()
//             console.log(notes)
//         } else {
//             navigate('/about')
//             showAlert("You need to signed in first", "error")
//         }
//         // eslint-disable-next-line
//     }, [])

//     return (
//         <div className="row ps-5 mt-4 mb-1">
//             <h1 className="display-6">Your Notes: </h1>
//             {notes.length === 0 && 
//             <div className="d-flex ">
//                 <p style={{position: "absolute", left: "35%", bottom: "-10%"}}>Create your first note :) !!!!!</p>
//                 <img className="img-fluid ms-5 mt-3" src={empty} alt="empty" style={{width: "30%", opacity: "0.5"}} />
//             </div>
//             }
//             {notes.map(note => 
//                 <NoteItem key={note._id} note={note} />
//             )}
//         </div>
//     )
// }

// export default Notes
import React, { useContext, useEffect } from 'react';
import { NoteContext } from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import empty from '../images/empty.svg';
import { useNavigate } from "react-router-dom";
import { AlertContext } from '../context/AlertContext';

function Notes() {
    const { notes, getNotes } = useContext(NoteContext);
    const navigate = useNavigate();
    const { showAlert } = useContext(AlertContext);

    // Fetch notes on component mount
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        } else {
            navigate('/about');
            showAlert("You need to sign in first", "error");
        }
        // eslint-disable-next-line
    }, []);

    // Ensure notes is an array before calling .map()
    return (
        <div className="row ps-5 mt-4 mb-1">
            <h1 className="display-6">Your Notes: </h1>
            {/* Show empty message if no notes are available */}
            {notes.length === 0 && 
            <div className="d-flex ">
                <p style={{ position: "absolute", left: "35%", bottom: "-10%" }}>
                    Create your first note :) !!!!!</p>
                <img className="img-fluid ms-5 mt-3" src={empty} alt="empty" style={{ width: "30%", opacity: "0.5" }} />
            </div>
            }
            {/* Render notes only if it's an array */}
            {Array.isArray(notes) && notes.map(note => 
                <NoteItem key={note._id} note={note} />
            )}
        </div>
    );
}

export default Notes;
