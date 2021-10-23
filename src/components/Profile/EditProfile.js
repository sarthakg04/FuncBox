import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './EditProfile.css';

import claw from "./assets/claw.svg";
import crocodile  from "./assets/crocodile.png";
import edu2 from "./assets/edu2.png";
import elephant from "./assets/elephant.png";
import graduation from "./assets/graduation.png";
import student2 from "./assets/student2.png";
import student3 from "./assets/student3.png";
import studying from "./assets/studying.png";
import tiger1 from "./assets/tiger1.png";
import tiger2 from "./assets/tiger2.png";
import dog from "./assets/dog.png";



export default function EditProfile(props){
  const [fname , setFname] = useState('nishant');
  const [lname , setLname] = useState('raj');
  const [email , setEmail] = useState('test@gmail.com');
  const [number , setNumber] = useState('91789788854');
  const [add , setAdd] = useState('test');
  const [dob , setDob] = useState('2021-10-21');
  const [avatar , setAvatar] = useState(claw);
  const [std , setStd] = useState(3);

  function changeFName(e){
    setFname(e.target.value);
  }

  function changeLName(e){
    setLname(e.target.value);
  }

  function changeEmail(e){
    setEmail(e.target.value)
  }

  function changePhoneNumber(e){
    console.log('yes');
    setNumber(e.target.value);
  }

  function changeAdd(e){
    setAdd(e.target.innerHTML);
  }

  function changeDob(e){
    setDob(e.target.value)
  }

  function changeStd(e){
    setStd(e.target.value)
  }

  return(
    <div className="profile__container">
      <div className="profile__heading">
        <p>Your Profile</p>
      </div>
      <div className="container">
        <div className="left__container">
          <div className="names">
            <div className="fname">
              <p>First Name</p>
              <input type="text" name="fname" value={fname} onChange = {changeFName}/>
            </div>
            <div className="lname">
              <p>Last Name</p>
              <input type="text" name="lname" value={lname} onChange = {changeLName}/>
            </div>
          </div>

          <div className="email">
            <p>E-mail</p>
            <input type="text" name="email" value={email} onChange = {changeEmail}/>
          </div>


          <div className="number">
            <p>Phone Number</p>
            <input type="number" name="phone" value={number} onChange = {changePhoneNumber}/>
          </div>
          <div className="address">
            <p>Address</p>
            <textarea name="add1" rows="8" cols="80" onChange={changeAdd}>{add}</textarea>
          </div>

          <div className="birth">
            <p>Date Of Birth</p>
            <input type="date" name="dob" value={dob} id="dob" onChange={changeDob}/>
          </div>

          <div className="standard">
            <p>Standard</p>
            <select className="" name="standard" id="std" value={std} onChange={changeStd}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
          <div className="buttons">
            <a href="javascript:void(0)" className="btn" on>Update Profile</a>
            <a href="/changePass" className="btn">Change Password</a>
          </div>
        </div>
        <div className="right__container">
          <img src={avatar} alt="" className="avatar__h"/>
          <p>Update Avatar</p>
          <div className="avatars">

            {/*<img src={dog} alt="" onClick={setAvatar(dog)}/>
            <img src={crocodile} alt="" onClick={setAvatar(crocodile)}/>
            <img src={edu2} alt="" onClick={setAvatar(edu2)}/>
            <img src={elephant} alt="" onClick={setAvatar(elephant)}/>
            <img src={graduation} alt="" onClick={setAvatar(graduation)}/>
            <img src={student2} alt="" onClick={setAvatar(student2)}/>
            <img src={student3} alt="" onClick={setAvatar(student3)}/>
            <img src={studying} alt="" onClick={setAvatar(studying)}/>
            <img src={tiger1} alt="" onClick={setAvatar(tiger1)}/>
            <img src={tiger2} alt="" onClick={setAvatar(tiger2)}/>*/}


              <img src={dog} alt="" />
              <img src={crocodile} alt="" />
              <img src={edu2} alt="" />
              <img src={elephant} alt="" />
              <img src={graduation} alt="" />
              <img src={student2} alt="" />
              <img src={student3} alt="" />
              <img src={studying} alt="" />
              <img src={tiger1} alt="" />
              <img src={tiger2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
