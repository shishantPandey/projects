let list = document.getElementById("list");
let x = document.getElementById("x");
let showHideMenu = document.getElementById("show-hide-menu");
let hi = document.getElementById("hi");
let logot = document.getElementById("logot");
x.style.color = "white";
list.style.color = "white";
list.onclick = () => {
	x.style.display = "inline-block";
	list.style.display = "none";
	showHideMenu.style.display = "flex";
	showHideMenu.style.background = "white";
	x.style.color = "black";
	list.style.color = "black";
	hi.style.color = "black";
	showHideMenu.style.paddingLeft = "10vw";
	logot.style.color = "black";
};
x.onclick = () => {
	list.style.display = "inline-block";
	x.style.display = "none";
	showHideMenu.style.display = "none";
	x.style.color = "white";
	logot.style.color = "white";
	list.style.color = "white";
};
