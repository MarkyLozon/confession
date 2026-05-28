const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const messageSection = document.getElementById("messageSection");
const typingText = document.getElementById("typingText");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

const message = `Hello, Bernadette Irada. Para talaga sayo itong ginawa ko.

May gusto talaga akong sabihin sayo, nahihiya lang ako kaya hindi ko masabi nang diretsahan. Kaya siguro ginawa ko na lang itong my day na ’to, hoping na makita mo. At kung hindi man, okay lang din… at least nasubukan ko.

Kaya kita niyaya mag-cinema noon kasi gusto talaga kitang makasama at makausap nang tayo lang dalawa. Pero aminado ako, nahihiya ako sayo. Pakiramdam ko kasi minsan jina-judge mo ako kaya lalo akong nawawalan ng lakas ng loob.

Hindi ako sanay umamin, lalo na sa taong tulad mo. Feeling ko nga wala talaga akong chance. Pero ayoko rin naman na manatili na lang itong nararamdaman ko nang hindi mo nalalaman.

Siguro ito na yung paraan ko para sabihin sayo na gusto kita.

Alam ko baka hindi ka mag-reply dito, at okay lang. Ikaw lang naman makakita nitong my day na ’to.

Kaya eto lang talaga yung tanong ko sayo…

Pwede ba kitang ligawan?
`;

let index = 0;
let isPlaying = false;

/* OPEN MESSAGE */

openBtn.addEventListener("click", async () => {

  try {

    music.volume = 0.7;

    await music.play();

    isPlaying = true;

    musicToggle.innerHTML = "🔇 Music";

  } catch(err){
    console.log("Music blocked");
  }

  intro.classList.add("hidden");
  messageSection.classList.remove("hidden");

  typeText();

});

/* TYPE EFFECT */

function typeText(){

  if(index < message.length){

    typingText.innerHTML += message.charAt(index);

    index++;

    setTimeout(typeText, 35);

  }

}

/* MUSIC TOGGLE */

musicToggle.addEventListener("click", async () => {

  if(!isPlaying){

    await music.play();

    isPlaying = true;

    musicToggle.innerHTML = "🔇 Music";

  } else {

    music.pause();

    isPlaying = false;

    musicToggle.innerHTML = "🔊 Music";

  }

});

/* FLOATING HEARTS */

const heartsContainer = document.querySelector(".hearts");

function createHeart(){

  const heart = document.createElement("span");

  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  heart.style.animationDuration = Math.random() * 5 + 5 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  },10000);

}

setInterval(createHeart,300);
