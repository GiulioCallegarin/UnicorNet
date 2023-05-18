import items from './items.js';

const bookmarks = document.querySelectorAll(".itemBookmark");
const faveOnly = document.querySelectorAll(".bookmark");
const showAll = document.querySelectorAll(".all");



bookmarks.forEach(element => {
	element.onclick = function () {
		let arr = element.src.split("/");
		let src = arr[arr.length - 1];
		let path = "";
		for (let i = 0; i < arr.length - 1; i++) {
			path += arr[i] + "/";
		}
		if (src == "bookmark.svg") {
			element.src = path + "bookmark_filled.svg";
			items[Number(this.id)].fave = 1;

		}
		else {
			element.src = path + "bookmark.svg";
			items[Number(this.id)].fave = 0;
			}
		
	}
});

(function () {

	var doc = document.documentElement;
	var w = window;

	var prevScroll = w.scrollY || doc.scrollTop;
	var curScroll;
	var direction = 0;
	var prevDirection = 0;

	var header = document.getElementById('site-header');

	var checkScroll = function () {
		curScroll = w.scrollY || doc.scrollTop;
		if (curScroll > prevScroll) {
			//scrolled up
			direction = 2;
		}
		else if (curScroll < prevScroll) {
			//scrolled down
			direction = 1;
		}

		if (direction !== prevDirection) {
			toggleHeader(direction, curScroll);
		}

		prevScroll = curScroll;
	};

	var toggleHeader = function (direction, curScroll) {
		if (direction === 2 && curScroll > 52) {
			header.classList.add('hide');
			prevDirection = direction;
		}
		else if (direction === 1) {
			header.classList.remove('hide');
			prevDirection = direction;
		}
	};

	window.addEventListener('scroll', checkScroll);

})();

faveOnly.forEach(element => {
	element.onclick = function () {
		for (let i = 0; i < items.length; i++) {
			if (items[i].fave==0) {
				(items[i].item).style.display = "none";
			}
			else
				(items[i].item).style.display = "block";
		}
	}
});

showAll.forEach(element => {
	element.onclick = function () {
		for(let i = 0; i < items.length; i++){
			(items[i].item).style.display = "block";
		}
	}
});

