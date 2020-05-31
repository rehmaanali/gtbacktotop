let hideOnTop = false;
function setStyle(config) {
	const t = document.getElementById("gtbacktop");
	window.hideOnTop = config && config.hideOnTop ? config.hideOnTop : false;
	t.style.display = config && config.hideOnTop ? 'none' : 'block';
	t.innerHTML = config && config.innerHTML ? config.innerHTML : '⇪'; 
	t.style.bottom = "10px"; 
	t.style.right = "10px";
	t.style.fontSize = "30px";
}
function gtbacktop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
const scrollcheck = function() {  
	const t = document.getElementById("gtbacktop");
	const y = window.scrollY;
	if (y >= 500) {
		t.style.display = "block";
	} else if (window.hideOnTop) {
		t.style.display = "none";
	} 
};  
function setgtbacktopbutton(config = null) {
	const t = document.createElement("A");
	t.setAttribute("id", "gtbacktop"), 
	t.setAttribute("class", "gtbacktop"),
	t.addEventListener("click", gtbacktop()),
	t.setAttribute("href", "#"), 
	t.style.position = "fixed",
	document.body.appendChild(t);
	const e = document.createElement("style");
	e.innerHTML = "html {scroll-behavior: smooth}", document.head.appendChild(e), setStyle(config)
}
setgtbacktopbutton();
window.addEventListener("scroll", scrollcheck);
