// inspired by https://stackoverflow.com/a/26230989/6723250
function isVisible(elem) {
	const top = elem.getBoundingClientRect().top
	return top > 0 && top < window.innerHeight
}
function triggerAnimations() {
	for (const elem of document.getElementsByClassName("animate")) {
		if(isVisible(elem))
			elem.classList.add("animate-triggered")
	}
}
window.onload = triggerAnimations
window.onresize = triggerAnimations
window.onscroll = triggerAnimations