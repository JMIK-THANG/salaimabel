const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const menu = document.getElementById('menu')

toggle.addEventListener('click', () => {
      console.log(nav)
      nav.classList.toggle('active');
      

})

// const mainMenu = document.querySelector('.mainMenu');
// const closeMenu = document.querySelector('.closeMenu');
// const openMenu = document.querySelector('.openMenu');



// openMenu.addEventListener('click',show);
// closeMenu.addEventListener('click',close);
// service.addEventListener('click',service);

// function show(){
//       mainMenu.style.display = 'flex';
//       mainMenu.style.top = '0';

// }

// function close(){
//       mainMenu.style.top = '-110%'
// }
