function openCard() {
  document.getElementById("cover-left").style.display = "none";
  document.getElementById("cover-right").style.display = "none";
  document.getElementById("card").classList.remove("hidden");
}

function sayYes() {
  window.location.href = "card.html"; // make sure this matches your new file name
}


function sayNo() {
  const noBtn = document.getElementById("noBtn");

  // Get window dimensions
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // Define safe zones (top-left and top-right images)
  const imgMargin = 20;       // space around the images
  const imgSize = 250;        // size of the images

  // Safe zones coordinates
  const safeZones = [
    { x: 0, y: 0, width: imgSize + imgMargin, height: imgSize + imgMargin }, // top-left
    { x: winWidth - imgSize - imgMargin, y: 0, width: imgSize + imgMargin, height: imgSize + imgMargin } // top-right
  ];

  let x, y;
  let tries = 0;

  do {
    x = Math.random() * (winWidth - btnWidth);
    y = Math.random() * (winHeight - btnHeight);
    tries++;

    // Stop if too many attempts to avoid infinite loop
    if (tries > 100) break;

    // Check if x,y overlaps any safe zone
  } while (safeZones.some(zone => 
      x < zone.x + zone.width &&
      x + btnWidth > zone.x &&
      y < zone.y + zone.height &&
      y + btnHeight > zone.y
  ));

  // Apply new position
  noBtn.style.position = "fixed"; // relative to viewport
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}


// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";
  const size = 20 + Math.random() * 20;
  heart.style.fontSize = size + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);
