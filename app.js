/**
 * Aligns the No button precisely with the invisible placeholder inside the card.
 * Uses Math.floor to prevent sub-pixel rendering shifts.
 */
function positionNoButton() {
    const placeholder = document.getElementById('no-placeholder');
    const noBtn = document.getElementById('noBtn');
    
    // Get location relative to the current viewport
    const rect = placeholder.getBoundingClientRect();
    
    // Snaps the button to the exact coordinates of the placeholder
    noBtn.style.left = Math.floor(rect.left) + 'px';
    noBtn.style.top = Math.floor(rect.top) + 'px';
    
    // Match the dimensions exactly
    noBtn.style.width = placeholder.offsetWidth + 'px';
    noBtn.style.height = placeholder.offsetHeight + 'px';
}

// Initial positioning and responsive adjustments
window.addEventListener('load', positionNoButton);
window.addEventListener('resize', positionNoButton);

function sayYes() {
    window.location.href = "card.html";
}

function sayNo() {
    const btn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const padding = 50;
    
    let newX, newY;
    let isSafe = false;

    // Jumping logic with collision detection for photos and the Yes button
    while (!isSafe) {
        newX = Math.random() * (window.innerWidth - btn.offsetWidth - padding);
        newY = Math.random() * (window.innerHeight - btn.offsetHeight - padding);

        const photoArea = window.innerWidth < 600 ? 170 : 280;
        const inTopLeft = (newX < photoArea && newY < photoArea);
        const inTopRight = (newX > window.innerWidth - photoArea && newY < photoArea);
        
        const yesRect = yesBtn.getBoundingClientRect();
        const overlapsYes = (
            newX < yesRect.right + padding &&
            newX + btn.offsetWidth > yesRect.left - padding &&
            newY < yesRect.bottom + padding &&
            newY + btn.offsetHeight > yesRect.top - padding
        );

        if (!inTopLeft && !inTopRight && !overlapsYes) {
            isSafe = true;
        }
    }

    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
}

// Heart Rain animation
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw"; 
  const size = 15 + Math.random() * 25;
  heart.style.fontSize = size + "px";
  const duration = 3 + Math.random() * 4;
  heart.style.animationDuration = duration + "s";
  document.body.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 7000);
}, 300);