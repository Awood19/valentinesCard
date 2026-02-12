function positionNoButton() {
    const placeholder = document.getElementById('no-placeholder');
    const noBtn = document.getElementById('noBtn');
    if (!placeholder || !noBtn) return;

    const rect = placeholder.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    noBtn.style.left = (rect.left + scrollX) + 'px';
    noBtn.style.top = (rect.top + scrollY) + 'px';
}

window.addEventListener('load', positionNoButton);
window.addEventListener('resize', positionNoButton);
setTimeout(positionNoButton, 500);

function sayYes() {
    window.location.href = "card.html";
}

function sayNo() {
    const btn = document.getElementById('noBtn');
    const padding = 50;
    
    // Quick math to move button immediately without a heavy loop
    const safeTop = window.innerHeight * 0.3; 
    const safeHeight = window.innerHeight - safeTop - btn.offsetHeight - padding;
    const safeWidth = window.innerWidth - btn.offsetWidth - padding;

    const newX = Math.random() * safeWidth + (padding / 2);
    const newY = (Math.random() * safeHeight) + safeTop;

    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
}

// REDUCED SPAWN RATE: Changed from 300ms to 800ms
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw"; 
  
  const size = 15 + Math.random() * 20;
  heart.style.fontSize = size + "px";
  
  // Quicker fall duration
  const duration = 2.5 + Math.random() * 1.5;
  heart.style.animationDuration = duration + "s";
  
  document.body.appendChild(heart);

  // Instant cleanup
  setTimeout(() => { heart.remove(); }, duration * 1000);
}, 800);