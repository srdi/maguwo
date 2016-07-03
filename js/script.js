window.onload = function() {
var menu = document.querySelector('.page-header__menu');
var mobileNav = document.querySelector('.mobile-nav');

menu.onclick = function() {
	if(mobileNav.style.top=="148px")
	{
		mobileNav.style.top = "-148px";
	}
	else {
		mobileNav.style.top = "148px";
	}
	
}
}