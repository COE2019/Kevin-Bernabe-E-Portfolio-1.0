window.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-out');
    fadeElements.forEach(function(element) {
      element.style.opacity = '1';
    });
  });
  
  window.addEventListener('load', function() {
    const fadeElements = document.querySelectorAll('.fade-out');
    fadeElements.forEach(function(element) {
      element.style.opacity = '0';
    });
  });

window.setTimeout(function() {  
    window.location.href = 'home.html'; 
}, 3000);

