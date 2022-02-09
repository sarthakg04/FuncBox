import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import "./Footer.css";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import { parse } from "qs";

// import bell from "./assets/bell.png"
// import fb from "./assets/fb.svg"
// import linked from "./assets/linked.svg"
// import insta from "./assets/insta.svg"

export default function Footer() {
  const bell =
    "https://ik.imagekit.io/funcboxImages/Footer_assets/bell_gFHth6UrGbt.png?updatedAt=1633351576358";
  const fb =
    "https://ik.imagekit.io/funcboxImages/Footer_assets/fb_1loztYmLx.png?updatedAt=1633369897725";
  const linked =
    "https://ik.imagekit.io/funcboxImages/Footer_assets/linked_VElNZJlpu.png?updatedAt=1633369896020";
  const insta =
    "https://ik.imagekit.io/funcboxImages/Footer_assets/insta_ESr1g9XOwSQ.png?updatedAt=1633369896765";

  const apiurl = process.env.REACT_APP_API_URL;

  const [getInTouchEmail, setGetInTouchEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = getInTouchEmail;
      const body = { email };
      const response = await fetch(
        `${
          process.env.NODE_ENV === "development"
            ? apiurl
            : "https://server.funcbox.in"
        }/email`,
        {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();

      if (response.status === 400) {
        toast.error(parseRes);
      } else {
        toast.success(parseRes);
      }

      console.log(parseRes);
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
  };

  // useEffect(async () => {

  // },[]);

  return (
    <div className="footer">
      <img
        className="footer__bg"
        src="https://ik.imagekit.io/funcboxImages/footer_ZmbXGRfiv.png"
        alt=""
      />

      <div className="get_in_touch">
        <div className="">Get in touch with us</div>
        <input
          type="email"
          value={getInTouchEmail}
          onChange={(e) => setGetInTouchEmail(e.target.value)}
          placeholder="Please enter your email"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
        />
      </div>

      <div className="home_store_school_blog">
        <div>Home</div>
        <div>Store</div>
        <div>School</div>
        <div>Blog</div>
      </div>

      <div className="horizontal_line" />

      <div className="social_media">
        <div>
          <img src={fb} alt="" />
        </div>
        <div>
          <img src={linked} alt="" />
        </div>
        <div>
          <img src={insta} alt="" />
        </div>
      </div>

      <div className="important_links">
        <div>Join our Team</div>
        <div>Terms</div>
        <div>Privacy</div>
      </div>

      <div className="postcredit">
        Made with <span>&#10084;</span> by FuncBox
      </div>
    </div>
  );
}
