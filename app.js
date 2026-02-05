function openCard() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("card").classList.remove("hidden");
}

function sayYes() {
  document.getElementById("response").textContent =
    "I am the luckiest man in the World";
  document.getElementById("response").classList.remove("hidden");

  document.getElementById("buttons").style.display = "none";
}


function sayNo() {
  const noBtn = document.getElementById("noBtn");
  const cardBox = document.querySelector(".card-box");

  // Make it absolute only after first click
  noBtn.style.position = "absolute";

  const boxRect = cardBox.getBoundingClientRect();

  // leave some margin so it stays fully visible
  const margin = 10;

  const x = Math.random() * (boxRect.width - noBtn.offsetWidth - margin*2) + margin;
  const y = Math.random() * (boxRect.height - noBtn.offsetHeight - margin*2) + margin;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  // random horizontal position
  heart.style.left = Math.random() * window.innerWidth + "px";

  // random size
  const size = 20 + Math.random() * 20;
  heart.style.fontSize = size + "px";

  // append to body
  document.body.appendChild(heart);

  // remove after animation
  setTimeout(() => heart.remove(), 5000);
}, 300);
