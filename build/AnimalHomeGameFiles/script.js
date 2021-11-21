// let animals = ['lion_den','fish_ocean','horse_stable','penguin_waddle','chicken_coop','elephant_jungle','cheetah_trees','birds_nest','dog_kennel','bees_beehive']
// createBackground()
// createArrowKeys()
// setCards()
// createSoundButton()


let animalSounds = ['lion sound','fish sound','horse sound','penguin sound','chicken sound','elephant sound','cheetah sound','birds sound','dog sound','bees sound']

var audio = null;
const imageLinks = {
  right_arrow:
    "https://ik.imagekit.io/funcboxImages/AnimalHomeGame_assets/right_aroow_JCw1wD6NEmH.png?updatedAt=1636645510909",
  left_arrow:
    "https://ik.imagekit.io/funcboxImages/AnimalHomeGame_assets/left_arrow_r1huDdxBE.png?updatedAt=1636645561549",
  play_btn:
    "https://ik.imagekit.io/funcboxImages/AnimalHomeGame_assets/play_btn_ETIzwq3aeg0.png?updatedAt=1636647407609",
};


let cards

const soundFiles = {
  bees: 
    "https://drive.google.com/file/d/1WntEa3t0qFeEFtR-tX4qoiv75JxNtw4W/view?usp=sharing",
  birds:
    "https://drive.google.com/file/d/1lmtK8LYTOrCBjD9MWq49PwYIn7RFAPKC/view?usp=sharing",
  camel:
    "https://drive.google.com/file/d/1GYSyrFxyulZkVxPtTNxzAh1XRNpI9_Dm/view?usp=sharing",
  cheetah:
    "https://drive.google.com/file/d/1a7UOXdc2UqvqTP1yJ9PQS2ARfQZPXGA-/view?usp=sharing",
  chicken:
    "https://drive.google.com/file/d/1C8c4LxsA_bG_Mm1ik6uYpsN5pBHjf4Fq/view?usp=sharing",
  cow: 
    "https://drive.google.com/file/d/13F1snubMeXqxmLMGLsy1fUP3_ocqL26U/view?usp=sharing",
  dog: 
    "https://drive.google.com/file/d/1SSx6cB27n6iO5pe5DEqpxM0xSklx1BIg/view?usp=sharing",
  ducks:
    "https://drive.google.com/file/d/1K4FT5VD65XY_AATsr-g0Es3fPQ5aWvs-/view?usp=sharing",
  elephant:
    "https://drive.google.com/file/d/1_zLdtyG1e_5ifTnkuHZKdfmgueRHQOW5/view?usp=sharing",
  fish: 
    "https://drive.google.com/file/d/1Pisa3zVKPHY8qDwxUbz_4ZDbybqQ3LNP/view?usp=sharing",
  horse:
    "https://drive.google.com/file/d/1hJW3V1sX_Atf_qL6GPY4-zxuU5BHo9FM/view?usp=sharing",
  lion: 
    "https://drive.google.com/file/d/1MKs2-DqzSQlNCHtK2d1uGRc7roKg8PbO/view?usp=sharing",
  penguin:
    "https://drive.google.com/file/d/1NkrlU4dB_Z_2T3aos70B_0M9HsKIZE3c/view?usp=sharing",
  pig: 
    "https://drive.google.com/file/d/1cFIaDbuIAsdBth63KPbTbg7PLH0DFpLO/view?usp=sharing",
  rabbit:
    "https://drive.google.com/file/d/1ehiyNgwmrBQ99s81pCilJdUcnOpLk6u4/view?usp=sharing",
  sheep:
    "https://drive.google.com/file/d/1YB3i-u5fhn79Va9t8hplYf9YI8tv8DPo/view?usp=sharing",
  spider:
    "https://drive.google.com/file/d/11qy3GIUf-lB17-1JAHBX9GOaHMj6Of6Z/view?usp=sharing",
  yak: 
    "https://drive.google.com/file/d/1ilNbyMdZJmtUYWpc2InOPQtJCXznM0il/view?usp=sharing",
};

var currentCard = 0;

function createBackground() {

  cards = [
    {
      name: animals[0].split('_')[0],
      image_src:
        "https://ik.imagekit.io/funcboxImages/AnimalHomeGame_assets/lion_0EwGYUevBmD.png?updatedAt=1636646808307",
    },
    {
      name: animals[1].split('_')[0],
      image_src:
        "https://ik.imagekit.io/funcboxImages/AnimalHomeGame_assets/fish_eV4C4b4Vl.png?updatedAt=1636646903361",
    },
    {
      name: animals[2].split('_')[0],
      image_src:
        "https://ik.imagekit.io/funcboxImages/AnimalHomeGame_assets/horse_4-SwdFpu04w.png?updatedAt=1636650144789",
    },
    {
      name: animals[3].split('_')[0],
      image_src:
        "https://ik.imagekit.io/funcboxImages/AnimalHomeGame_assets/penguin_hmf7vinI20My.png?updatedAt=1636650701330",
    },
    {
      name: animals[4].split('_')[0],
      image_src:
        "https://ik.imagekit.io/funcboxImages/AnimalHomeGame_assets/chicken_kXwJgKC7Yn7u.png?updatedAt=1636650701251",
    },
    {
      name: animals[5].split('_')[0],
      image_src:
        "https://ik.imagekit.io/funcboxImages/AnimalHomeGame_assets/elephant_JIehWvKK0QnJ.png?updatedAt=1636650701211",
    },
    {
      name: animals[6].split('_')[0],
      image_src:
        "https://ik.imagekit.io/funcboxImages/AnimalHomeGame_assets/cheetah_2T_fDo-BYl.png?updatedAt=1636650701219",
    },
    {
      name: animals[7].split('_')[0],
      image_src:
        "https://ik.imagekit.io/funcboxImages/AnimalHomeGame_assets/birds_dtVBgCLxzk.png?updatedAt=1636650701212",
    },
    {
      name: animals[8].split('_')[0],
      image_src:
        "https://ik.imagekit.io/funcboxImages/AnimalHomeGame_assets/dog_jsstZ-ftIc.png?updatedAt=1636650701137",
    },
    {
      name: animals[9].split('_')[0],
      image_src:
        "https://ik.imagekit.io/funcboxImages/AnimalHomeGame_assets/bees_gPuPeIML-LzF.png?updatedAt=1636650700953",
    },
  ];


  const container = document.createElement("div");
  container.id = "container";
  container.classList.add("container");
  document.body.appendChild(container);
}
function createArrowKeys() {
  const right_arrow = document.createElement("div");
  right_arrow.classList.add("arrow_key", "right");
  right_arrow.innerHTML = `<img src = "${imageLinks.right_arrow}">`;
  document.getElementById("container").appendChild(right_arrow);
  right_arrow.addEventListener("click", () => {
    if (currentCard < animals.length - 1) currentCard++;
    setCards();
    if (audio && !audio.paused) {
      audio.pause();
    }
  });
  const left_arrow = document.createElement("div");
  left_arrow.classList.add("arrow_key", "left");
  left_arrow.innerHTML = `<img src = "${imageLinks.left_arrow}">`;
  document.getElementById("container").appendChild(left_arrow);
  left_arrow.addEventListener("click", () => {
    if (currentCard > 0) currentCard--;
    setCards();
    if (audio && !audio.paused) {
      audio.pause();
    }
  });
}
function setCards() {
  const container = document.getElementById("container");
  container.style.backgroundImage = `url("${cards[currentCard].image_src}")`;
}
function createSoundButton() {
  const play_btn = document.createElement("button");
  play_btn.style.backgroundColor = "transparent";
  play_btn.style.border = "none";
  play_btn.style.cursor = "pointer";
  play_btn.classList.add("play_button");
  play_btn.innerHTML = `<img src = "${imageLinks.play_btn}">`;
  document.getElementById("container").appendChild(play_btn);
  play_btn.addEventListener("click", () => {
    console.log(getSoundId(soundFiles[cards[currentCard].name]));

    if ((audio && audio.paused) || !audio) {
      audio = new Audio(
        `https://docs.google.com/uc?export=download&id=${getSoundId(
          soundFiles[animalSounds[currentCard].split(" ")[0]]
        )}`
      );
      audio.play();
    } else {
      console.log("Already playing");
    }
  });
}

function getSoundId(url) {
  return url.substring(url.indexOf("d/") + 2, url.indexOf("/v"));
}
