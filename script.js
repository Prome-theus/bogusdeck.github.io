window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var logoText = document.querySelector(".logo-text");
  var scrollToTopBtn = document.getElementById("scrollToTop");
  if (window.scrollY > 0) {
    nav.classList.add("shrink");
    logoText.classList.add("hidden");
    scrollToTopBtn.classList.add("visible");
  } else {
    nav.classList.remove("shrink");
    logoText.classList.remove("hidden");
    scrollToTopBtn.classList.remove("visible");
  }
});

// Scroll to top function
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const lines = [
  "bash-3.2$ who am i",
  "Tanish Vashisth",
  "bash-3.2$ ls",
  "Artwork Desktop Downloads Music Documents Homework",
  "bash-3.2$ uname -a",
  "Linux archlinux 6.5.8-arch1-1 #1 SMP PREEMPT_DYNAMIC Thu, 19 Oct 2022 22:52:14 +0000 x86_64 GNU/Linux",
];

const terminal = document.getElementById("terminal");
const typingSound = document.getElementById("typing-sound");
let currentIndex = 0;
let lineIndex = 0;
let charIndex = 0;

const typeWriter = () => {
  if (currentIndex >= lines.length) {
    setTimeout(() => {
      currentIndex = 0;
      terminal.innerHTML = "";
      // typingSound.pause();
      // typingSound.currentTime = 0;
      setTimeout(typeWriter, 0); // Start typing immediately after clearing
    }, 5000); // 5-second delay before clearing the terminal
    return; // Exit the function to prevent further execution until the timeout completes
  }

  const line = lines[currentIndex];

  if (charIndex < line.length) {
    terminal.innerHTML += line.charAt(charIndex);
    charIndex++;
    // typingSound.play(); // Play typing sound
  } else {
    terminal.innerHTML += "<br>";
    currentIndex++;
    charIndex = 0;
  }

  setTimeout(typeWriter, 75); // Adjust the timeout value for typing speed
};

const terminalObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      typeWriter();
      observer.unobserve(entry.target);
      // typingSound.play();
    }
  });
});

terminalObserver.observe(terminal);


// Hide the message container initially
const messageContainer = document.getElementById('messageContainer');
messageContainer.classList.add('hidden');

const messageSections = document.querySelectorAll('.message');
let messageIndex = 0;

// Function to trigger animation for the next message section
function animateNextMessage() {
  if (messageIndex < messageSections.length) {
    const currentMessage = messageSections[messageIndex];
    currentMessage.classList.add('animate-slide-left');
    messageIndex++;
  }
}

// Intersection Observer to trigger animation for each message section
const messageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateNextMessage();
      observer.unobserve(entry.target);
    }
  });
});

// Observe each message section
messageSections.forEach(section => {
  messageObserver.observe(section);
});

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var logoText = document.querySelector(".logo-text");
  var scrollToTopBtn = document.getElementById("scrollToTop");
  if (window.scrollY > 0) {
    nav.classList.add("shrink");
    logoText.classList.add("hidden");
    scrollToTopBtn.classList.add("visible");
  } else {
    nav.classList.remove("shrink");
    logoText.classList.remove("hidden");
    scrollToTopBtn.classList.remove("visible");
  }
  
  // If scroll position is greater than zero and message container is hidden, show it
  if (window.scrollY > 0 && messageContainer.classList.contains('hidden')) {
    messageContainer.classList.remove('hidden');
    // Disable scrolling on body
    document.body.classList.remove('no-scroll');
  }
});

