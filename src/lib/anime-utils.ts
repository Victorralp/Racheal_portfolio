// Dynamic import to handle the module structure inconsistency
// @ts-ignore
const anime = require('animejs');

// Colorful background animation
export const animateBackground = (element: HTMLElement) => {
  const colors = [
    'rgb(110, 37, 214)', // Purple
    'rgb(36, 107, 253)', // Blue
    'rgb(29, 209, 161)', // Green
    'rgb(255, 107, 107)', // Red
    'rgb(255, 159, 26)'  // Orange
  ];
  
  anime({
    targets: element,
    backgroundColor: colors,
    easing: 'linear',
    duration: 10000,
    loop: true,
    direction: 'alternate'
  });
};

// Text gradient animation
export const animateTextGradient = (element: HTMLElement) => {
  const gradients = [
    'linear-gradient(45deg, #ff6b6b, #feca57)',
    'linear-gradient(45deg, #48dbfb, #1dd1a1)',
    'linear-gradient(45deg, #6a5af9, #d66efd)',
    'linear-gradient(45deg, #ff9f43, #ee5253)',
    'linear-gradient(45deg, #54a0ff, #2e86de)'
  ];
  
  anime({
    targets: element,
    background: gradients,
    easing: 'easeInOutQuad',
    duration: 5000,
    loop: true,
    direction: 'alternate',
    update: function() {
      element.style.backgroundClip = 'text';
      element.style.webkitBackgroundClip = 'text';
      element.style.color = 'transparent';
    }
  });
};

// Card hover effect
export const setupCardAnimation = (element: HTMLElement) => {
  element.addEventListener('mouseenter', () => {
    anime({
      targets: element,
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      borderColor: ['#ccc', '#ff6b6b'],
      duration: 300,
      easing: 'easeOutElastic(1, .6)'
    });
  });
  
  element.addEventListener('mouseleave', () => {
    anime({
      targets: element,
      scale: 1,
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      borderColor: '#ccc',
      duration: 400,
      easing: 'easeOutElastic(1, .6)'
    });
  });
};

// Particles animation
export const createParticles = (container: HTMLElement, count: number = 50) => {
  // Clear any existing particles
  container.innerHTML = '';
  
  const colors = [
    '#ff6b6b', // Red
    '#48dbfb', // Blue
    '#1dd1a1', // Green
    '#feca57', // Yellow
    '#6a5af9'  // Purple
  ];
  
  // Create particles
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.position = 'absolute';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.pointerEvents = 'none';
    container.appendChild(particle);
  }
  
  // Animate particles
  anime({
    targets: '.particle',
    translateX: () => anime.random(-250, 250),
    translateY: () => anime.random(-250, 250),
    scale: () => anime.random(0.2, 1.5),
    opacity: [0.4, 0.8, 0.4],
    easing: 'easeInOutQuad',
    duration: () => anime.random(5000, 10000),
    loop: true,
    delay: () => anime.random(0, 1000),
    direction: 'alternate'
  });
};

// Button hover animation
export const setupButtonAnimation = (button: HTMLElement) => {
  button.addEventListener('mouseenter', () => {
    anime({
      targets: button,
      scale: 1.1,
      backgroundColor: {
        value: '#6a5af9',
        easing: 'easeInOutQuad'
      },
      boxShadow: '0 5px 15px rgba(106, 90, 249, 0.4)',
      duration: 300
    });
  });
  
  button.addEventListener('mouseleave', () => {
    anime({
      targets: button,
      scale: 1,
      backgroundColor: {
        value: '#3a86ff',
        easing: 'easeInOutQuad'
      },
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      duration: 300
    });
  });
};

// Text animation with staggering
export const animateStaggeredText = (container: HTMLElement, text: string) => {
  // Clear existing content
  container.innerHTML = '';
  
  // Split text into individual characters
  text.split('').forEach(char => {
    const span = document.createElement('span');
    span.className = 'staggered-char';
    span.textContent = char === ' ' ? '\u00A0' : char; // Replace space with non-breaking space
    container.appendChild(span);
  });
  
  // Animate characters
  anime({
    targets: container.querySelectorAll('.staggered-char'),
    opacity: [0, 1],
    translateY: [20, 0],
    scale: [0.8, 1],
    rotate: () => anime.random(-10, 10),
    easing: 'easeOutExpo',
    duration: 1000,
    delay: anime.stagger(50)
  });
};

// Timeline-based animation sequence
export const createAnimationSequence = (elements: HTMLElement[]) => {
  const timeline = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });
  
  elements.forEach((el, index) => {
    timeline.add({
      targets: el,
      translateY: [50, 0],
      opacity: [0, 1],
      delay: index * 100
    });
  });
  
  return timeline;
};

// Logo animation for navbar
export const animateLogo = (element: HTMLElement) => {
  anime({
    targets: element,
    scale: [1, 1.1, 1],
    duration: 2000,
    easing: 'easeInOutQuad',
    loop: true
  });
  
  // Apply a gradient to the logo text
  const gradients = [
    'linear-gradient(45deg, #ff6b6b, #feca57)',
    'linear-gradient(45deg, #48dbfb, #1dd1a1)',
    'linear-gradient(45deg, #6a5af9, #d66efd)',
  ];
  
  anime({
    targets: element,
    background: gradients,
    easing: 'easeInOutQuad',
    duration: 5000,
    loop: true,
    direction: 'alternate',
    update: function() {
      if (element) {
        element.style.backgroundClip = 'text';
        element.style.webkitBackgroundClip = 'text';
        element.style.color = 'transparent';
      }
    }
  });
}; 