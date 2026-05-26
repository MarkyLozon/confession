const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const messageSection = document.getElementById("messageSection");
const typingText = document.getElementById("typingText");

const message = `I don't really know where to begin...

But ever since you appeared in my life,
something changed.

Days became softer.
Songs started making sense.
And even the smallest moments suddenly felt special.

Maybe you don't realize it,
but your existence alone can make someone smile.

This website may just be made from simple code,
but every word here is real.

You are genuinely one of the most beautiful people
I have ever met —
not only because of your appearance,
but because of your energy,
your smile,
your presence,
and the way you make everything feel warm.

And if life ever becomes heavy for you,
if you ever feel tired,
unnoticed,
or unappreciated...

please remember this:

someone out there thinks you're amazing.

Maybe this message is unexpected.
Maybe it's cheesy.
Maybe it's too much.

But I just wanted to tell you something honest...

You became special to me. ❤️`;

let index = 0;

const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", async () => {

  try {
    music.volume = 0.7; // adjust volume (0 to 1)

    await music.play(); // IMPORTANT: async play fix

  } catch (err) {
    console.log("Music blocked, retry needed");
  }

  intro.classList.add("hidden");
  messageSection.classList.remove("hidden");

  typeText();

});

/* TYPING EFFECT */

function typeText(){

  if(index < message.length){

    typingText.innerHTML += message.charAt(index);

    index++;

    setTimeout(typeText, 35);

  }

}

/* FLOATING HEARTS */

const heartsContainer = document.querySelector(".hearts");

function createHeart(){

  const heart = document.createElement("span");

  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize =
  Math.random() * 20 + 15 + "px";

  heart.style.animationDuration =
  Math.random() * 5 + 5 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  },10000);

}

setInterval(createHeart,300);