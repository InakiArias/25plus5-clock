function animateButton(elementId, color) {
    let el = document.getElementById(elementId);
    let currentColor = 'aqua';
    
    el.animate(
        [
          // keyframes
          { backgroundColor: currentColor },
          { backgroundColor: color },
          { backgroundColor: currentColor }
        ],
        {
          // timing options
          duration: 620
        }
      );
}

export default animateButton;