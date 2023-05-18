const bookmarks = document.querySelectorAll(".itemBookmark");

bookmarks.forEach(element => {
	element.onclick = function () {
		let arr = element.src.split("/");
		let src = arr[arr.length - 1];
		let path = "";
		for (let i = 0; i < arr.length - 1; i++) {
			path += arr[i] + "/";
		}
		if (src == "bookmark.svg")
			element.src = path + "bookmark_filled.svg";
		else
			element.src = path + "bookmark.svg";
	}
});

(function(){

	var doc = document.documentElement;
	var w = window;
  
	var prevScroll = w.scrollY || doc.scrollTop;
	var curScroll;
	var direction = 0;
	var prevDirection = 0;
  
	var header = document.getElementById('site-header');
  
	var checkScroll = function() {
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

  var toggleHeader = function(direction, curScroll) {
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