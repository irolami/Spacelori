
const card = document.getElementById('card');

function onMove(e){
  const rect = card.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top + rect.height/2;
  const x = (e.clientX - cx) / rect.width;
  const y = (e.clientY - cy) / rect.height;
  const tiltX = (y * -12).toFixed(2);
  const tiltY = (x * 12).toFixed(2);
  card.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(6px)`;
}

function reset(){
  card.style.transform = 'translateZ(0)';
}

window.addEventListener('mousemove', onMove);
window.addEventListener('mouseleave', reset);
window.addEventListener('touchmove', (ev)=>{
  if(ev.touches && ev.touches[0]) onMove(ev.touches[0]);
}, {passive:true});