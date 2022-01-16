import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./EditProfile.css";

import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  setAuth,
  setUser,
  setToken,
  setProfile,
  // setUser
} from "../../auth/authslice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

// const { fname, lname, caddress, pincode, age, dob, std, phone } = req.body;

export default function EditProfile(props) {
  const { token } = useAuth();
  const [fname, setFname] = useState("nishant");
  const [lname, setLname] = useState("raj");
  const [email, setEmail] = useState("test@gmail.com");
  const [number, setNumber] = useState("");
  const [add, setAdd] = useState("test");
  const [dob, setDob] = useState("2021-10-21");
  const [avatar, setAvatar] = useState("avatars/Tiger.png");
  const [std, setStd] = useState(3);
  const history = useHistory();
  const dispatch = useDispatch();
  const apiurl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `${
          process.env.NODE_ENV === "development"
            ? apiurl
            : "https://server.funcbox.in"
        }/editprofile/edit`,
        {
          credentials: "include",
          method: "GET",
          headers: { token: token },
        }
      );
      const data = await res.json();

      const userData = data[0][0];
      dispatch(setToken({ token: "Bearer " + data[1].token }));

      setFname(userData.fname || "");
      setLname(userData.lname || "");
      setEmail(userData.email || "");
      setNumber(userData.phone || "+91");
      const d = new Date().toISOString();
      setDob(userData.dob || d.substring(0, d.indexOf("T")));
      setAdd(userData.caddress || "");
      setStd(userData.class || 1);
      setAvatar(userData.avatar || avatar);
    }
    getData();
  }, []);

  async function updateProfile() {
    const reqBody = {
      fname: fname,
      lname: lname,
      email: email,
      phone: number,
      caddress: add,
      dob: dob,
      std: std,
      avatar: avatar,
    };

    const res = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? apiurl
          : "https://server.funcbox.in"
      }/editprofile/edit`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        body: JSON.stringify(reqBody),
      }
    );
    const data = await res.json();

    if (data === "updated") {
      dispatch(setUser({ username: fname + " " + lname }));
      dispatch(setProfile({ avatar: avatar }));
      toast.success("Your Account is updated");
      history.push("/Welcome");
    }
  }

  function changeFName(e) {
    setFname(e.target.value);
  }

  function changeLName(e) {
    setLname(e.target.value);
  }

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changePhoneNumber(e) {
    console.log("yes");
    setNumber(e.target.value);
  }

  function changeAdd(e) {
    setAdd(e.target.value);
  }

  function changeDob(e) {
    setDob(e.target.value);
  }

  function changeStd(e) {
    setStd(e.target.value);
  }

  return (
    <div className="profile__container">
      <div className="profile__heading">
        <p>Your Profile</p>
      </div>
      <div className="container">
        <div className="left__container">
          <div className="names">
            <div className="fname">
              <p>First Name</p>
              <input
                type="text"
                name="fname"
                value={fname}
                onChange={changeFName}
              />
            </div>
            <div className="lname">
              <p>Last Name</p>
              <input
                type="text"
                name="lname"
                value={lname}
                onChange={changeLName}
              />
            </div>
          </div>

          <div className="email">
            <p>E-mail</p>
            <input
              type="text"
              name="email"
              value={email}
              onChange={changeEmail}
            />
          </div>

          <div className="number">
            <p>Phone Number</p>
            <input
              type="text"
              inputMode="numeric"
              name="phone"
              value={number}
              onChange={changePhoneNumber}
            />
          </div>
          <div className="address">
            <p>Address</p>
            <textarea
              name="add1"
              rows="8"
              cols="80"
              onChange={changeAdd}
              value={add}
            ></textarea>
          </div>

          <div className="birth">
            <p>Date Of Birth</p>
            <input
              type="date"
              name="dob"
              value={dob}
              id="dob"
              onChange={changeDob}
            />
          </div>

          <div className="standard">
            <p>Standard</p>
            <select
              className=""
              name="standard"
              id="std"
              value={std}
              onChange={changeStd}
            >
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
            <button className="btn btn1" onClick={updateProfile}>
              Update Profile
            </button>
            <a href="/changePass" className="btn">
              Change Password
            </a>
          </div>
        </div>
        <div className="right__container">
          <div className="avatar__header">
            <img src={avatar} alt="" className="avatar__h" />
          </div>
          <p>Update Avatar</p>
          <div className="avatars">
            <img
              src="avatars/whale.png"
              alt=""
              onClick={() => setAvatar("avatars/whale.png")}
            />
            <img
              src="avatars/zebra.png"
              alt=""
              onClick={() => setAvatar("avatars/zebra.png")}
            />
            <img
              src="avatars/Elephant.png"
              alt=""
              onClick={() => setAvatar("avatars/Elephant.png")}
            />
            <img
              src="avatars/Panda.png"
              alt=""
              onClick={() => setAvatar("avatars/Panda.png")}
            />
            <img
              src="avatars/fox.png"
              alt=""
              onClick={() => setAvatar("avatars/fox.png")}
            />
            <img
              src="avatars/tortoise.png"
              alt=""
              onClick={() => setAvatar("avatars/tortoise.png")}
            />
            <img
              src="avatars/lion.png"
              alt=""
              onClick={() => setAvatar("avatars/lion.png")}
            />
            <img
              src="avatars/monkey.png"
              alt=""
              onClick={() => setAvatar("avatars/monkey.png")}
            />
            <img
              src="avatars/Tiger.png"
              alt=""
              onClick={() => setAvatar("avatars/Tiger.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
