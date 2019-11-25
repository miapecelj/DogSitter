
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');
    
    burger.addEventListener('click', () =>{
      nav.classList.toggle('nav-active');
      navLinks.forEach((link, index)=>{
        if(link.style.animation){
          link.style.animation = '';
        }else{
          link.style.animation = link.style.animation = `navLinkFade  0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
      burger.classList.toggle('toggle');
    });
    
}
const f= ()=>{
const fotorama=document.querySelector('.fotorama');
const burger = document.querySelector('.burger');
burger.addEventListener('click', () =>{
    fotorama.classList.toggle('fotoramaA')
  });
}
const k = ()=>{
const Usluge = document.querySelector('.Usluge');
const burger = document.querySelector('.burger');
burger.addEventListener('click', () =>{
  Usluge.classList.toggle('UslugeA');
 
  });
}

navSlide();
f();
k();
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document. documentElement.clientWidth)
  );
}

const scroll=window.requestAnimationFrame ||  function(callback){
  window.setTimeout(callback, 100/60)
}
const elementsToShow= document.querySelectorAll(".ONamaTekst");
function loop(){
  elementsToShow.forEach(function(element){
    if(isElementInViewport(element)){
      element.classList.add('isVisible');
    } else{
      element.classList.remove('isVisible');
    }
  })
  scroll(loop);
}

loop();

const error = document.getElementById('error');
const form = document.getElementById('form');
const ime = document.getElementById('ime');
const usluga = document.getElementById('usluga');
const brojDana = document.getElementById('brojDana');
const datum = document.getElementById('datum');
const email = document.getElementById('email');
const posalji = document.getElementById("posalji");
const danas = new Date();
if(form!=null){
form.addEventListener('submit', (e)=>{
  var niz= (datum.value).split('-');
  var datumk = new Date(niz[0],niz[1]-1,niz[2]);
  let messages=[];
   if(ime.value === "" || email.value === ''){
    messages.push('Ime i email ne smeju biti prazni');
  }
  if(Number(brojDana.value)<=0){
    messages.push('Broj dana mora biti veći od 0');
  }
  if(datumk<=danas){

    messages.push('Datum ne može biti u prošlosti');
  }
  if(messages.length > 0){
    e.preventDefault();
    error.innerText = messages.join(', ')
  }
  else{
    alert("Poslato! Dobićete odgovor na mail.");
  }
})
}





