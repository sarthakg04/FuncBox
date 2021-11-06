import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./WelcomePage.css";
function WelcomePage() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state)=>state.auth.token);

  useEffect(() => {}, [isAuthenticated]);

  const username = useSelector((state) => state.auth.username);

  const games = [
    {
      name: "Alien Game",
      img_src:
        "https://ik.imagekit.io/funcboxImages/WelcomePage_assets/superman_vzjKReNAq.png?updatedAt=1633934549464",
      path: "/AlienGame",
    },
    {
      name: "Mission Mars",
      img_src:
        "https://ik.imagekit.io/funcboxImages/WelcomePage_assets/missionmars_TY5evi45WpQ.png?updatedAt=1633934549057",
      path: "/MissionMars",
    },
    {
      name: "Monkey Multiplier",
      img_src:
        "https://ik.imagekit.io/funcboxImages/WelcomePage_assets/monkeymultiplier_Gc5czdndJ4N.png?updatedAt=1633935134438",
      path: "/MonkeyMultiplier",
    },
    {
      name: "Whack a Mole",
      img_src:
        "https://ik.imagekit.io/funcboxImages/WelcomePage_assets/molegame_ndPOWyaTu.png?updatedAt=1633932817320",
      path: "/MoleGame",
    },
    {
      name: "Angry Birds",
      img_src:
        "https://ik.imagekit.io/funcboxImages/WelcomePage_assets/angrybirds_1P8OmNKQB77R.png?updatedAt=1633935134645",
      path: "/AngryBirds",
    },
    {
      name: "Water Cycle",
      img_src:
        "https://ik.imagekit.io/funcboxImages/WelcomePage_assets/watercycle_Yi1RFz1qy.png?updatedAt=1633935134339",
      path: "/LetsMakeItRain",
    },
    {
      name: "Color Fun",
      img_src:
        "https://ik.imagekit.io/funcboxImages/WelcomePage_assets/colorgame_xMmJiGfwh.png?updatedAt=1633937930122",
      path: "/ColorGame",
    },
    {
      name: "Avengers",
      img_src:
        "https://ik.imagekit.io/funcboxImages/WelcomePage_assets/molegame_ndPOWyaTu.png?updatedAt=1633932817320",
      path: "/AvengersGame",
    },
    {
      name: "Incredibles",
      img_src:
        "https://ik.imagekit.io/funcboxImages/WelcomePage_assets/incredibles_4ErvfoQcfAhI.png?updatedAt=1633935134605",
      path: "/IncrediblesGame",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="welcome_container">
        <div className="avatar_container">
          <div className="avatar">
            <img
              className="avatar_img"
              src="https://ik.imagekit.io/funcboxImages/WelcomePage_assets/avatar_uy1c2lVSi.png?updatedAt=1633928511425"
              alt=""
            />
            <img
              className="overlay"
              src="https://ik.imagekit.io/funcboxImages/WelcomePage_assets/overlay_-HxVdV70h.png?updatedAt=1633929022661"
              alt=""
            />
            <p>Welcome</p>
            <p>{username}</p>
            <p id="small_screen_msg">
              To get access to the code editor. Please join from a pc or laptop
            </p>
          </div>
          <div className="background">
            <img
              className="blackp"
              src="https://ik.imagekit.io/funcboxImages/WelcomePage_assets/blackpanther_IIsrNDKinTc.png?updatedAt=1633929505144"
              alt=""
            />
            <img
              className="ironman"
              src="https://ik.imagekit.io/funcboxImages/WelcomePage_assets/ironman_b8QMYdK4J.png?updatedAt=1633929505421"
              alt=""
            />
            <img
              className="captain"
              src="https://ik.imagekit.io/funcboxImages/WelcomePage_assets/captainamerica_r8qZ89EV4SS.png?updatedAt=1633929505505"
              alt=""
            />
          </div>
        </div>
        <div className="ipad_container">
          <div className="ipad">
            <img
              className="ipad_img"
              src="https://ik.imagekit.io/funcboxImages/WelcomePage_assets/ipad-2_h7OOMRZo9Xt.svg?updatedAt=1633930967057"
              alt=""
            />
            <div className="ipad_screen">
              <div className="logo_div">
                <img
                  src="https://ik.imagekit.io/funcboxImages/WelcomePage_assets/logo_avuKvwCSN.png?updatedAt=1633931799519"
                  alt=""
                />
              </div>
              <div className="game_thumbnails">
                {games.map((game) => (
                  <Link to={game.path}>
                    <div className="thumbnail">
                      <div className="thumb_image">
                        <img src={`${game.img_src}`} alt="" />
                      </div>
                      <p className="game_title">{game.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link to="/">
                <img
                  className="home_btn"
                  src="https://ik.imagekit.io/funcboxImages/WelcomePage_assets/home_btn_nQkUZBwimU0.png?updatedAt=1633935913014"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
