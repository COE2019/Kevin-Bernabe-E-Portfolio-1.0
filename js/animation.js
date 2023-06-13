window.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function(element) {
      element.style.opacity = '0';
    });
  });
  
  window.addEventListener('load', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function(element) {
      element.style.opacity = '1';
    });
  });
  