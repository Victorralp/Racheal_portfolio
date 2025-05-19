// CSS-based animations utility functions

// Add gradient background to text
export const addTextGradient = (element: HTMLElement) => {
  if (!element) return;
  
  element.style.backgroundImage = 'linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #1dd1a1, #6a5af9)';
  element.style.backgroundSize = '200% 200%';
  element.style.backgroundClip = 'text';
  element.style.webkitBackgroundClip = 'text';
  element.style.color = 'transparent';
  element.style.animation = 'gradient 15s ease infinite';
  
  // Add the animation to the document if it doesn't exist
  if (!document.getElementById('gradient-animation-style')) {
    const style = document.createElement('style');
    style.id = 'gradient-animation-style';
    style.textContent = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
  }
};

// Add hover effect to cards
export const setupCardHoverEffect = (element: HTMLElement) => {
  if (!element) return;
  
  element.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease';
  
  element.addEventListener('mouseenter', () => {
    element.style.transform = 'translateY(-5px) scale(1.02)';
    element.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    element.style.borderColor = '#ff6b6b';
  });
  
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'translateY(0) scale(1)';
    element.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    element.style.borderColor = '';
  });
};

// Button hover effect
export const setupButtonHoverEffect = (button: HTMLElement) => {
  if (!button) return;
  
  button.style.transition = 'transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease';
  
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-2px)';
    button.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = '';
  });
};

// Create data-themed background
export const createParticlesBackground = (container: HTMLElement, count: number = 30) => {
  if (!container) return;
  
  // Clear any existing content
  container.innerHTML = '';
  
  // Add the animation styles
  if (!document.getElementById('particles-animation-style')) {
    const style = document.createElement('style');
    style.id = 'particles-animation-style';
    style.textContent = `
      @keyframes float {
        0% { transform: translate(0, 0) rotate(0deg); opacity: 0.15; }
        25% { opacity: 0.3; }
        50% { transform: translate(-20px, -30px) rotate(10deg); opacity: 0.4; }
        75% { opacity: 0.3; }
        100% { transform: translate(0, 0) rotate(0deg); opacity: 0.15; }
      }
      
      @keyframes float-reverse {
        0% { transform: translate(0, 0) rotate(0deg); opacity: 0.15; }
        25% { opacity: 0.3; }
        50% { transform: translate(20px, 30px) rotate(-10deg); opacity: 0.4; }
        75% { opacity: 0.3; }
        100% { transform: translate(0, 0) rotate(0deg); opacity: 0.15; }
      }

      @keyframes float-horizontal {
        0% { transform: translateX(0) rotate(0deg); opacity: 0.15; }
        50% { transform: translateX(40px) rotate(5deg); opacity: 0.35; }
        100% { transform: translateX(0) rotate(0deg); opacity: 0.15; }
      }
      
      .data-element {
        position: absolute;
        pointer-events: none;
        z-index: 0;
        transform-origin: center;
      }
      
      .bar-chart {
        display: flex;
        align-items: flex-end;
        height: 40px;
        width: 45px;
        border: 1px solid currentColor;
        padding: 2px;
        background: rgba(255,255,255,0.05);
      }
      
      .bar-chart div {
        width: 6px;
        margin: 0 1px;
        background-color: currentColor;
      }
      
      .bar-chart-label {
        position: absolute;
        bottom: -15px;
        font-size: 8px;
        width: 100%;
        text-align: center;
        color: currentColor;
      }
      
      .pie-chart {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: conic-gradient(
          currentColor 0% 25%, 
          rgba(255,255,255,0.3) 25% 55%, 
          currentColor 55% 85%, 
          rgba(255,255,255,0.2) 85% 100%
        );
        border: 1px solid currentColor;
      }
      
      .line-chart {
        width: 50px;
        height: 30px;
        position: relative;
        border: 1px solid currentColor;
        background: rgba(255,255,255,0.05);
      }
      
      .line-chart:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0.7;
        clip-path: polygon(0% 100%, 10% 70%, 20% 85%, 30% 40%, 40% 60%, 50% 30%, 60% 50%, 70% 15%, 80% 45%, 90% 25%, 100% 40%, 100% 100%);
      }
      
      .data-point {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: currentColor;
        box-shadow: 0 0 5px currentColor;
      }
      
      .data-grid {
        width: 50px;
        height: 50px;
        background-image: 
          linear-gradient(to right, currentColor 1px, transparent 1px),
          linear-gradient(to bottom, currentColor 1px, transparent 1px);
        background-size: 10px 10px;
        opacity: 0.2;
        border: 1px solid currentColor;
      }
      
      .math-symbol {
        font-size: 26px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        color: currentColor;
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: 0 0 5px currentColor;
      }
      
      .scatter-plot {
        position: relative;
        width: 50px;
        height: 50px;
        border: 1px solid currentColor;
        background: rgba(255,255,255,0.05);
      }
      
      .scatter-plot:before {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        background: currentColor;
        border-radius: 50%;
        box-shadow: 
          10px 10px 0 currentColor,
          20px 30px 0 currentColor,
          30px 15px 0 currentColor,
          35px 35px 0 currentColor,
          15px 25px 0 currentColor,
          40px 20px 0 currentColor;
      }
      
      .database {
        width: 30px;
        height: 40px;
        position: relative;
        overflow: hidden;
      }
      
      .database:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0.5;
        border-radius: 5px 5px 0 0;
      }
      
      .database:after {
        content: '';
        position: absolute;
        top: 6px;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(255,255,255,0.6);
        box-shadow: 0 8px 0 rgba(255,255,255,0.6), 0 16px 0 rgba(255,255,255,0.6);
      }
      
      .table {
        width: 60px;
        height: 50px;
        position: relative;
        border: 1px solid currentColor;
        background: rgba(255,255,255,0.1);
        overflow: hidden;
      }
      
      .table:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
          linear-gradient(to right, currentColor 1px, transparent 1px),
          linear-gradient(to bottom, currentColor 1px, transparent 1px);
        background-size: 9px 10px;
        opacity: 0.5;
      }
      
      .table:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10px;
        background-color: currentColor;
        opacity: 0.4;
      }
      
      .spreadsheet {
        width: 70px;
        height: 60px;
        border: 1px solid currentColor;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
        background: rgba(255,255,255,0.1);
        position: relative;
        overflow: hidden;
      }
      
      .spreadsheet:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
          linear-gradient(to right, currentColor 1px, transparent 1px),
          linear-gradient(to bottom, currentColor 1px, transparent 1px);
        background-size: 25% 20%;
        opacity: 0.5;
      }
      
      .dashboard {
        width: 75px;
        height: 60px;
        border: 1px solid currentColor;
        background: rgba(255,255,255,0.1);
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 20px 1fr 1fr;
        grid-gap: 4px;
        padding: 4px;
      }
      
      .dashboard:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20px;
        background-color: currentColor;
        opacity: 0.4;
        grid-column: span 2;
      }
      
      .histogram {
        width: 50px;
        height: 40px;
        position: relative;
        border: 1px solid currentColor;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 2px;
        background: rgba(255,255,255,0.05);
      }
      
      .histogram div {
        flex: 1;
        margin: 0 1px;
        background-color: currentColor;
      }
    `;
    document.head.appendChild(style);
  }
  
  const colors = [
    '#3498db', // Blue
    '#2ecc71', // Green
    '#e74c3c', // Red
    '#f39c12', // Orange
    '#9b59b6', // Purple
    '#1abc9c', // Teal
    '#34495e'  // Dark blue
  ];
  
  /* const dataElements = [
    // Chart types
    'pie-chart',
    'bar-chart',
    'line-chart',
    'scatter-plot',
    'histogram',
    // Data structures
    'table',
    'spreadsheet',
    'dashboard',
    'data-grid',
    'database',
    // Other elements
    'data-point',
    'math-symbol'
  ]; */
  
  const mathSymbols = [
    '∑', '∫', '√', '%', '+', '×', '=', '∞', '#', 'π', 'Σ', '∆', 'μ', 'σ', '$', '€', '£', '¥'
  ];
  
  // Distribution of element types - weight toward data visualizations
  const weights = {
    'pie-chart': 12,
    'bar-chart': 15,
    'line-chart': 15,
    'scatter-plot': 12,
    'histogram': 12,
    'table': 20,
    'spreadsheet': 20,
    'dashboard': 15,
    'data-grid': 8,
    'database': 10,
    'data-point': 5,
    'math-symbol': 10
  };
  
  // Create weighted array for random selection
  const weightedElements: string[] = [];
  for (const [element, weight] of Object.entries(weights)) {
    for (let i = 0; i < weight; i++) {
      weightedElements.push(element);
    }
  }
  
  for (let i = 0; i < count; i++) {
    const elementType = weightedElements[Math.floor(Math.random() * weightedElements.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    // const size = elementType === 'data-point' ? 8 : (Math.random() * 30 + 20);
    const animationType = Math.random() > 0.6 ? 'float' : (Math.random() > 0.5 ? 'float-reverse' : 'float-horizontal');
    const animationDuration = Math.random() * 25 + 15; // Between 15 and 40 seconds
    const animationDelay = Math.random() * 8;
    const scale = 0.6 + Math.random() * 0.8;
    
    const element = document.createElement('div');
    element.className = `data-element ${elementType}`;
    element.style.color = color;
    
    // Apply common styles
    element.style.opacity = `${0.2 + Math.random() * 0.2}`; // Increase opacity slightly for better visibility
    element.style.left = `${Math.random() * 100}%`;
    element.style.top = `${Math.random() * 100}%`;
    element.style.animation = `${animationType} ${animationDuration}s ease-in-out infinite`;
    element.style.animationDelay = `${animationDelay}s`;
    element.style.transform = `scale(${scale})`;
    
    // Special setup for different element types
    if (elementType === 'bar-chart') {
      // Create random bars for the bar chart
      for (let j = 0; j < 5; j++) {
        const bar = document.createElement('div');
        bar.style.height = `${10 + Math.random() * 30}px`;
        element.appendChild(bar);
      }
      
      // Add labels
      const label = document.createElement('div');
      label.className = 'bar-chart-label';
      label.textContent = 'DATA';
      element.appendChild(label);
    } else if (elementType === 'math-symbol') {
      // Add a random math symbol
      element.textContent = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
    } else if (elementType === 'histogram') {
      // Create histogram bars
      for (let j = 0; j < 8; j++) {
        const bar = document.createElement('div');
        bar.style.height = `${5 + Math.random() * 35}px`;
        element.appendChild(bar);
      }
    }
    
    container.appendChild(element);
  }
}; 