const btn=document.querySelector('.menu-button'),nav=document.querySelector('.nav-links');
if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open)})}
