$(document).ready(function() {
	/* обращаемся к header_burger и вешаем на него событие клик*/
	$('.header_burger').click(function(event) {
		/* при клике на бургер добавляем к .header_burger, .header_menu класс active*/
		$('.header_burger, .menu').toggleClass('active_burger');
	});
});



// document.addEventListener('DOMContentLoaded', function(){
//    document.querySelector('.header_burger');
// }


// document.getElementById(".header_burger").onclick = function() {
    

// }

// (() => {
//       window.onload = () => {
//         let header_burger = document.querySelector('.header_burger');
//         let header_menu = document.querySelector('.menu');
//         let body = document.querySelector('body');
//         header_burger.addEventListener('click', (e)=> {
//           header_burger.classList.toggle('active_burger');
//           header_menu.classList.toggle('active_burger');
//           body.classList.toggle('lock');
//         })
//       }
// })();


let body = document.querySelector('body');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // код для мобильных устройств
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for (let i = 0; i < arrow.length; i++) {
    	let thisLink = arrow[i].previousElementSibling; // ссылка меню
    	let subMenu = arrow[i].nextElementSibling; // выпадающее меню
    	let thisArrow = arrow[i]; // стрелочка

    	thisLink.classList.add('parent');
    	arrow[i].addEventListener('click', function(){
    		subMenu.classList.toggle('open');
    		thisArrow.classList.toggle('active_arrow');

    	});
    }

 } else {
    // код для обычных устройств
    body.classList.add('mouse');
}
