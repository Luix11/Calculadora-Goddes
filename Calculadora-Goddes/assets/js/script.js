openMenu.addEventListener('click', () => {

	menu.style.display = "flex"
	menu.style.right = (menu.offsetWidth * -1) + 'px'
	setTimeout(()=> {

		menu.style.opacity = '1'
		menu.style.right = "0"
		openMenu.style.display = 'none'

	}, 10);
})

closeMenu.addEventListener('click', () => {

	menu.style.opacity = '0'
	menu.style.right = (menu.offsetWidth * -1) + 'px'
	
	setTimeout(()=> {

		menu.removeAttribute('style')
		openMenu.removeAttribute('style');
		
	}, 200);
})

function link1(){
open('https://www.youtube.com/@LRGameSMoba');
}
function link2(){
	open('https://www.youtube.com/@AkiraTR');
}
function link3(){
	open('https://www.youtube.com/@FrostSubZeroGoddess');
}