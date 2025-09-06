// Testimonial slider drag
const slider = document.querySelector('.testimonial-slider');
let isDown = false, startX, scrollLeft;
slider.addEventListener('mousedown', (e) => { isDown = true; startX = e.pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft; });
slider.addEventListener('mouseleave', () => isDown=false);
slider.addEventListener('mouseup', () => isDown=false);
slider.addEventListener('mousemove', (e) => { 
  if(!isDown) return; e.preventDefault(); 
  const x = e.pageX - slider.offsetLeft; 
  const walk = (x - startX) * 2; 
  slider.scrollLeft = scrollLeft - walk; 
});
