const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const mLink = document.querySelectorAll('.menu__link');
const bodyBurger = document.querySelector('body');

iconMenu.addEventListener('click', function () {
	iconMenu.classList.toggle('active');
	menuBody.classList.toggle('active');
	// if (parseInt(window.innerWidth) < 992) {
	bodyBurger.classList.toggle('lock');
	// };
});

for (var k = 0; k < mLink.length; k++) {
	mLink[k].addEventListener('click', function () {
		iconMenu.classList.remove('active');
		menuBody.classList.remove('active');
		body.classList.remove('lock');
	});
};
//SlideToggle

let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}

let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');

	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}

let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}

;
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
	window.addEventListener('scroll', animScroll);
	function animScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + screenLeft }
	}
	setTimeout(() => {
		animScroll();
	}, 400)

};
/*! SmoothScroll v16.1.4 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).SmoothScroll=t()}(this,(function(){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},t=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},n=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,i="",r=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===r?i+="\\"+t.toString(16)+" ":i+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+i},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(e){return e?(t=e,parseInt(window.getComputedStyle(t).height,10)+e.offsetTop):0;var t},i=function(e,t,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),window.scrollTo(0,t))},r=function(e,t,n,o){if(t.emitEvents&&"function"==typeof window.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(s,c){var u,l,d,f,m={};m.cancelScroll=function(e){cancelAnimationFrame(f),f=null,e||r("scrollCancel",u)},m.animateScroll=function(n,s,c){m.cancelScroll();var l=t(u||e,c||{}),h="[object Number]"===Object.prototype.toString.call(n),p=h||!n.tagName?null:n;if(h||p){var w=window.pageYOffset;l.header&&!d&&(d=document.querySelector(l.header));var g,y,v,S=a(d),E=h?n:function(e,t,n,a){var i=0;if(e.offsetParent)do{i+=e.offsetTop,e=e.offsetParent}while(e);return i=Math.max(i-t-n,0),a&&(i=Math.min(i,o()-window.innerHeight)),i}(p,S,parseInt("function"==typeof l.offset?l.offset(n,s):l.offset,10),l.clip),b=E-w,O=o(),I=0,M=function(e,t){var n=t.speedAsDuration?t.speed:Math.abs(e/1e3*t.speed);return t.durationMax&&n>t.durationMax?t.durationMax:t.durationMin&&n<t.durationMin?t.durationMin:parseInt(n,10)}(b,l),A=function(e){g||(g=e),I+=e-g,v=w+b*function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t}(l,y=(y=0===M?0:I/M)>1?1:y),window.scrollTo(0,Math.floor(v)),function(e,t){var o=window.pageYOffset;if(e==t||o==t||(w<t&&window.innerHeight+o)>=O)return m.cancelScroll(!0),i(n,t,h),r("scrollStop",l,n,s),g=null,f=null,!0}(v,E)||(f=window.requestAnimationFrame(A),g=e)};0===window.pageYOffset&&window.scrollTo(0,0),function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)}(n,h,l),"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches?i(n,Math.floor(E),!1):(r("scrollStart",l,n,s),m.cancelScroll(!0),window.requestAnimationFrame(A))}};var h=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(l=e.target.closest(s))&&"a"===l.tagName.toLowerCase()&&!e.target.closest(u.ignore)&&l.hostname===window.location.hostname&&l.pathname===window.location.pathname&&/#/.test(l.href)){var t,o;try{t=n(decodeURIComponent(l.hash))}catch(e){t=n(l.hash)}if("#"===t){if(!u.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(t);(o=o||"#top"!==t?o:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=window.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||window.pageYOffset},document.title,t||window.location.href)}}(u),m.animateScroll(o,l))}},p=function(){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(u)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(n(history.state.anchor)))||m.animateScroll(e,null,{updateURL:!1})}};m.destroy=function(){u&&(document.removeEventListener("click",h,!1),window.removeEventListener("popstate",p,!1),m.cancelScroll(),u=null,l=null,d=null,f=null)};return function(){if(!("querySelector"in document&&"addEventListener"in window&&"requestAnimationFrame"in window&&"closest"in window.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";m.destroy(),u=t(e,c||{}),d=u.header?document.querySelector(u.header):null,document.addEventListener("click",h,!1),u.updateURL&&u.popstate&&window.addEventListener("popstate",p,!1)}(),m}}));
;
var scroll = new SmoothScroll('a[href*="#"]',{
	header: '.header'
});

if (parseInt(window.innerWidth) < 480) {
	var shopPageActions = document.querySelectorAll('.shop-page__action');
	shopPageActions[0].classList.add('active');
	_slideToggle(shopPageActions[0].parentElement.querySelector(".shop-page__hidden"));
	for (var j = 0; j < shopPageActions.length; j++) {
		shopPageActions[j].addEventListener('click', function (e) {
			e.currentTarget.classList.toggle('active');
			e.currentTarget.classList.add('current');
			_slideToggle(e.currentTarget.parentElement.querySelector(".shop-page__hidden"));
			for (var k = 0; k < shopPageActions.length; k++) {
				if (shopPageActions[k].classList.contains('active')) {
					if (shopPageActions[k].classList.contains('current')) {
						shopPageActions[k].classList.remove('current');
					}
					else {
						shopPageActions[k].classList.remove('active');
						_slideUp(shopPageActions[k].parentElement.parentElement.querySelector(".shop-page__hidden"));
					}
				}
			}

		})
	}
}

const header = document.querySelector(".header");
const menuLinks = document.querySelectorAll(".menu__link");
const logo = document.querySelector(".header__logo");
let iconMenus = document.querySelector(".icon-menu").querySelectorAll("span");
const menuBodyColor = document.querySelector(".menu__body");

window.addEventListener('scroll', addBackToHeader);
function addBackToHeader() {
	if (pageYOffset > 10) {
		header.style.backgroundColor = "#fff";
		header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.5)";
		logo.style.color = "#2c2c2c";
		menuBodyColor.classList.add('whiteMask');
		iconMenus[0].style.backgroundColor = "#2c2c2c";
		iconMenus[1].style.backgroundColor = "#2c2c2c";
		iconMenus[2].style.backgroundColor = "#2c2c2c";
		if (parseInt(window.innerWidth) > 768) {
			for (let i = 0; i < menuLinks.length; i++) {
				// menuLinks[i].style.color = "#2c2c2c";
				menuLinks[i].classList.add("whiteOnBlue");
			}
		}

	} else {
		header.style.backgroundColor = "#2c2c2c";
		header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.0)";
		logo.style.color = "#fff";
		menuBodyColor.classList.remove('whiteMask');
		iconMenus[0].style.backgroundColor = "#fff";
		iconMenus[1].style.backgroundColor = "#fff";
		iconMenus[2].style.backgroundColor = "#fff";
		if (parseInt(window.innerWidth) > 768) {
			for (let i = 0; i < menuLinks.length; i++) {
				menuLinks[i].style.color = "#fff";
				menuLinks[i].classList.remove("whiteOnBlue");
			}
		}

	};
};


const opportunitiesTabs = document.querySelectorAll(".opportunities-page__tab");
const opportunitiesItems = document.querySelectorAll(".opportunities-page__item");

for (let q = 0; q < opportunitiesTabs.length; q++) {
	opportunitiesTabs[q].addEventListener("click", function () {
		for (let k = 0; k < opportunitiesTabs.length; k++) {
			opportunitiesTabs[k].classList.remove("active");
			opportunitiesItems[k].classList.remove("active");
		}
		opportunitiesTabs[q].classList.add("active");
		opportunitiesItems[q].classList.add("active");
	})
}

var questionsPageFronts = document.querySelectorAll('.questions-page__front');
questionsPageFronts[0].classList.add('active');
_slideToggle(questionsPageFronts[0].parentElement.querySelector(".questions-page__back"));
for (var j = 0; j < questionsPageFronts.length; j++) {
	questionsPageFronts[j].addEventListener('click', function (e) {
		e.currentTarget.classList.toggle('active');
		e.currentTarget.classList.add('current');
		_slideToggle(e.currentTarget.parentElement.querySelector(".questions-page__back"));
		for (var k = 0; k < questionsPageFronts.length; k++) {
			if (questionsPageFronts[k].classList.contains('active')) {
				if (questionsPageFronts[k].classList.contains('current')) {
					questionsPageFronts[k].classList.remove('current');
				}
				else {
					questionsPageFronts[k].classList.remove('active');
					_slideUp(questionsPageFronts[k].parentElement.querySelector(".questions-page__back"));
				}
			}
		}

	})
}

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);
		// formData.append('image', formImage.files[0]);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				// formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			alert('Почта/телефон - это обязательное поле для заполнения');
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	// //Получаем инпут file в переменную
	// const formImage = document.getElementById('formImage');
	// //Получаем див для превью в переменную
	// const formPreview = document.getElementById('formPreview');
	// if (formImage) {
	// 	//Слушаем изменения в инпуте file
	// 	formImage.addEventListener('change', () => {
	// 		uploadFile(formImage.files[0]);
	// 	});
	// }


	// function uploadFile(file) {
	// 	// провераяем тип файла
	// 	if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
	// 		alert('Разрешены только изображения.');
	// 		formImage.value = '';
	// 		return;
	// 	}
	// 	// проверим размер файла (<2 Мб)
	// 	if (file.size > 2 * 1024 * 1024) {
	// 		alert('Файл должен быть менее 2 МБ.');
	// 		return;
	// 	}

	// 	var reader = new FileReader();
	// 	reader.onload = function (e) {
	// 		formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
	// 	};
	// 	reader.onerror = function (e) {
	// 		alert('Ошибка');
	// 	};
	// 	reader.readAsDataURL(file);
	// }
});

