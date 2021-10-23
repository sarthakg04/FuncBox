import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './ForgotPass.css';



export default function EditProfile(props){
  const [currentPass , setCurrentPass] = useState('');
  const [newPass , setNewPass] = useState('');
  const [confirmPass , setConfirmPass] = useState('');

  function currentPassHandler(e){
    setCurrentPass(e.target.value);
  }

  function newPassHandler(e){
    setNewPass(e.target.value);
  }

  function confirmPassHandler(e){
    setConfirmPass(e.target.value);
  }

  return(
    <div className="profile__container">
      <div className="profile__heading">
        <p>Change Password</p>
      </div>
      <div className="container">
        <div className="left__container">
        <div className="">
          <p>Current Password</p>
          <input type="password" name="currentPass" value={currentPass} onChange = {currentPassHandler}/>
        </div>
        <div className="">
          <p>New Password</p>
          <input type="password" name="newPass" value={newPass} onChange = {newPassHandler}/>
        </div>
        <div className="">
          <p>Confirm Password</p>
          <input type="password" name="confirmPass" value={confirmPass} onChange = {confirmPassHandler}/>
        </div>
          <div className="buttons">

            <a href="javascript:void(0)" className="btn">Change Password</a>
          </div>
        </div>
        <div className="right__container">


        </div>
      </div>
    </div>
  )
}
