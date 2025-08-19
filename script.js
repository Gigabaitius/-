function toggleMenu(){
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

const slider = {
  root: null,
  index: 0,
  init(){
    this.root = document.querySelector('.slider');
    const slides = this.root.querySelectorAll('.slide');
    const dots = document.querySelector('.dots');
    slides.forEach((_, i)=>{
      const b = document.createElement('button');
      b.setAttribute('aria-label', 'Отзыв ' + (i+1));
      b.addEventListener('click', ()=> this.go(i));
      dots.appendChild(b);
    });
    this.update();
    setInterval(()=> this.go((this.index+1) % slides.length), 6000);
  },
  go(i){
    this.index = i;
    this.update();
  },
  update(){
    const slides = this.root.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dots button');
    this.root.scrollTo({left: this.root.clientWidth * this.index, behavior: 'smooth'});
    dots.forEach((d, idx)=> d.classList.toggle('active', idx===this.index));
  }
};
window.addEventListener('DOMContentLoaded', ()=> slider.init());

function submitForm(e){
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  console.log('Booking form:', data);
  alert('Спасибо! Я свяжусь с вами в ближайшее время 🙂');
  e.target.reset();
  return false;
}

function hideCookie(){ document.getElementById('cookie').style.display='none'; }
