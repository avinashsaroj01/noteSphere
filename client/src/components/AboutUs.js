import React from 'react'
import '../styles/aboutUs.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  Button } from '@mui/material';
// import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function AboutUs() {
  return (
    <div className="feat bg-gray pt-5 pb-5">
    <Button className="mb-4" variant="text" color="secondary" startIcon={<ArrowBackIcon />} component={Link} to="/" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}>Home</Button>
    <div className="container">
      <div className="row">
        <div className="section-head col-sm-12">
          <h4><span>Why Choose</span> Us?</h4>
          <p>When you choose us, you'll feel the benefit of 1 year suscription with extra 3 months validity</p>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"></i></span>
            <h6>Achievements</h6>
            <p>Billions of Users, Millions of Articles Published, Thousands Got Hired by Top Companies and the numbers are still growing.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_two"><i className="fa fa-anchor"></i></span>
            <h6>Grow With Us</h6>
            <p>Gain and share your knowledge & skills with a variety of learning platforms offered by MasterDSA.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_three"><i className="fa fa-hourglass-half"></i></span>
            <h6>24 x 7 User Support</h6>
            <p>If our customer has any problem and any query we are always happy to help then.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_four"><i className="fa fa-database"></i></span>
            <h6>Prepare With Us</h6>
            <p>Prepare for an interview with millions of articles and courses designed by experts.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_five"><i className="fa fa-upload"></i></span>
            <h6>Get Hired With Us</h6>
            <p>Don’t know where to apply? Stop by MaterDSA where we offer multiple opportunities for you to get hired</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_six"><i className="fa fa-camera"></i></span>
            <h6>Affordable cost</h6>
            <p>Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
