import React, { useState, useEffect } from "react";
import FlippableCard, { Back, Front } from "./FlippableCard";
import "./Container.css";
function Container() {
  const numOfCardsForSmallDevice = 6;
  const cards = [
    {
      front:
        "https://ik.imagekit.io/funcboxImages/Cards_assets/lets_make_it_rain_front_-z4sZcdqS-BM.png?updatedAt=1636539041706",
      back: "https://ik.imagekit.io/funcboxImages/Cards_assets/lets_make_it_rain_back_Sc9h1VHTHYM.png?updatedAt=1636539041626",
    },
    {
      front:
        "https://ik.imagekit.io/funcboxImages/Cards_assets/solar_system_front_3mFURiBMJ.png?updatedAt=1636539541135",
      back: "https://ik.imagekit.io/funcboxImages/Cards_assets/solor_system_back__fXr6Qrkcgg.png?updatedAt=1636539541132",
    },
    {
      front:
        "https://ik.imagekit.io/funcboxImages/Cards_assets/trash_game_front_62lAIyvMw.png?updatedAt=1636539675076",
      back: "https://ik.imagekit.io/funcboxImages/Cards_assets/trash_game_back_fmvGHBDwJm0.png?updatedAt=1636539674698",
    },
    {
      front:
        "https://ik.imagekit.io/funcboxImages/Cards_assets/photosynthesis_front_qYmpWCw3k.png?updatedAt=1636539897664",
      back: "https://ik.imagekit.io/funcboxImages/Cards_assets/photosynthesis_back_W9WoewH2PPZ.png?updatedAt=1636539897643",
    },
    {
      front:
        "https://ik.imagekit.io/funcboxImages/Cards_assets/count_dracula_front_ayhrdKZuKVx.png?updatedAt=1636539989893",
      back: "https://ik.imagekit.io/funcboxImages/Cards_assets/count_dracula_back_UU5T0nW5t.png?updatedAt=1636539989850",
    },
    {
      front:
        "https://ik.imagekit.io/funcboxImages/Cards_assets/cheesy_gupta_front_c1lxz-3la_k.png?updatedAt=1636540917483",
      back: "https://ik.imagekit.io/funcboxImages/Cards_assets/cheesy_gupta_back_fN7gP7Pey.png?updatedAt=1636540917453",
    },
    {
      front:
        "https://ik.imagekit.io/funcboxImages/Cards_assets/catch_me_front_360B1H129qwS.png?updatedAt=1636541172735",
      back: "https://ik.imagekit.io/funcboxImages/Cards_assets/catch_me_back_MsEcAnj5lFS.png?updatedAt=1636541172706",
    },
    {
      front:
        "https://ik.imagekit.io/funcboxImages/Cards_assets/shapez_front_uSDgWG6m-.png?updatedAt=1636541028835",
      back: "https://ik.imagekit.io/funcboxImages/Cards_assets/shapez_back_N7-_PghD8Sx.png?updatedAt=1636541028833",
    },
    {
      front:
        "https://ik.imagekit.io/funcboxImages/Cards_assets/mr_fraction_front_A-EJN82CT.png?updatedAt=1636555830945",
      back: "https://ik.imagekit.io/funcboxImages/Cards_assets/mr_fraction_back_yg3Toiad0q9.png?updatedAt=1636555830866",
    },
    {
      front:
        "https://ik.imagekit.io/funcboxImages/Cards_assets/hit_it_front_9qAYWpFzG8b.png?updatedAt=1636555979262",
      back: "https://ik.imagekit.io/funcboxImages/Cards_assets/hit_it_back_oal7ua8Lq.png?updatedAt=1636555979252",
    },
  ];
  const [cardsToShow, setCardsToShow] = useState(
    window.innerWidth > 1000
      ? [...cards]
      : cards.slice(0, numOfCardsForSmallDevice)
  );
  useEffect(() => {
    const changeCards = () => {
      if (window.innerWidth <= 1000) {
        if (cardsToShow.length !== numOfCardsForSmallDevice) {
          console.log("Changing");
          setCardsToShow(cards.slice(0, numOfCardsForSmallDevice));
        }
      } else {
        if (cardsToShow.length < cards.length) {
          console.log("Changed");
          setCardsToShow([...cards]);
        }
      }
    };
    var timeoutid;
    if (cards.length > 0)
      window.addEventListener("resize", () => {
        clearTimeout(timeoutid);
        timeoutid = setTimeout(() => changeCards(), 500);
      });
  }, [cards]);

  return (
    <div className="cards_section">
      {cardsToShow.map((card, i) => (
        <div className="outer_container">
          <FlippableCard>
            <Front>
              <img className="cards_image" src={card.front} alt="" />
            </Front>
            <Back>
              <img className="cards_image" src={card.back} alt="" />
            </Back>
          </FlippableCard>
        </div>
      ))}
    </div>
  );
}

export default Container;
