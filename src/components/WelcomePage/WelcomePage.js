import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Navbar/Navbar";
import "./WelcomePage.css";
function WelcomePage() {
  const { isAuthenticated, token, username } = useAuth();
  const apiurl = process.env.REACT_APP_API_URL;
  const history = useHistory();
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const placeholder =
    "https://ik.imagekit.io/funcboxImages/WelcomePage_assets/placeholder_oF5SIwZ26.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642429577487";
  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
    }
  }, [isAuthenticated]);
  useEffect(() => {
    const getGames = async () => {
      const res = await fetch(
        `${
          process.env.NODE_ENV === "development"
            ? apiurl
            : "https://server.funcbox.in"
        }/data/games`,
        {
          method: "GET",
          credentials: "include",
          headers: { token: token },
        }
      );
      const data = await res.json();
      if (data && data.length > 0) setAllGames(data);
    };

    if (token) {
      getGames();
    }
  }, [token]);

  useEffect(() => {
    const getUserGames = async () => {
      const res = await fetch(
        `${
          process.env.NODE_ENV === "development"
            ? apiurl
            : "https://server.funcbox.in"
        }/usergames`,
        {
          method: "GET",
          credentials: "include",
          headers: { token: token },
        }
      );
      const data = await res.json();
      if (data && data.games.length > 0) {
        console.log("All Games:", allGames);
        for (let gameid of data.games) {
          const game = allGames.filter((g) => g.id === gameid);

          setGames((games) => {
            let array = [...games, game[0]];
            return array;
          });
        }
      }
      console.log("data:", data);
    };
    if (allGames.length > 0) {
      getUserGames();
      console.log(games);
    }
  }, [allGames]);

  useEffect(() => {
    if (games.length > 0) {
      console.log("games: ", games);
    }
  }, [games]);

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
                {games?.map((game) => (
                  <Link className="thumbnail_link" to={game.route}>
                    <div className="thumbnail">
                      <div className="thumb_image">
                        <img
                          src={`${
                            game.icon != "test" ? game.icon : placeholder
                          }`}
                          alt=""
                        />
                      </div>
                      <p className="game_title">{game.gname}</p>
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
