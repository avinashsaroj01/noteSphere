import React from 'react'
import noteImg from '../images/inotebook.svg'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import "../styles/home.css"
import Notes from './Notes';
import Navbar from "./Navbar";
import Alertss from "./Alertss";

function Home() {
    console.log('hii')

    return (
        <>
            <Navbar />
            <Alertss />
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="display-1 pt-5 ps-5 respo"><span style={{ color: "#9C27B0" }}>NoteSafe</span>Pro</h1>
                        <p className="ps-5 respo" style={{ fontSize: "1.7rem", fontWeight: "bold" }}>Fast, Secure, and Easy Note-Taking</p>
                        <p className="ps-5 mt-3 respo" style={{ fontSize: "1rem" }}>NoteSafe empowers you to take full control of your notes with a user-friendly interface.
                        Whether you're working on personal projects or organizing your professional life, NoteSafe has you covered.
                            <Link to="/about">About Page</Link>  </p>
                        <div className="d-flex justify-content-center">
                            <Button component={Link} to="/new" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</Button>
                        </div>
                    </div>
                    <div className="col-md-7 d-flex flex-column align-items-center">
                        <img className="img-fluid" style={{width: "75%"}} src={noteImg} alt="iNotebook" />
                    </div>
                </div>

                <Notes />
            </div>
        </>
    )
}

export default Home
