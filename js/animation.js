window.addEventListener('DOMContentLoaded', function() {
    var fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function(element) {
      element.style.opacity = '0';
    });
  });
  
  window.addEventListener('load', function() {
    var fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function(element) {
      element.style.opacity = '1';
    });
  });
  