const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const messageSection = document.getElementById("messageSection");
const typingText = document.getElementById("typingText");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

const message = `I honestly don't know where to begin...

But ever since you came into my life,
something changed.

Days became softer.
Songs suddenly made sense.
And even simple moments started feeling special.

Maybe you don't realize it,
but your smile can brighten someone's entire day.

This website may just look like lines of code,
but every single word here is genuine.

You became someone important to me.
Someone I think about more than I should.
Someone who unknowingly became part of my happiness.

And if life ever gets heavy for you...
if you ever feel tired,
unloved,
or unappreciated...

please remember this:

someone out there thinks you're absolutely amazing.

Maybe this is cheesy.
Maybe this is unexpected.
Maybe this message feels random.

But I just wanted to tell you something honest...

You are special to me. ❤️`;

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
