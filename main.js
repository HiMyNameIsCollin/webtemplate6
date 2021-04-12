
function clipAnimation(e){
	e.stopPropagation()
	const tl = gsap.timeline()
	function endAnimation(e) {
		tl.reverse()
		e.target.removeEventListener('mouseleave', endAnimation)
	}
	const navDecal = Array.from(e.target.children).filter(decal => decal.classList.contains('navDecal'))
	tl.to(e.target, {clipPath: 'polygon(0 0, 100% 0, 100% 90%, 65% 90%, 65% 80%, 55% 120%, 45% 120%, 35% 80%, 35% 90%, 0 90%)', duration: .25})
	.to(navDecal, {opacity: '1', duration: .25})
	.to(navDecal, {transform: 'scale(1)', duration: .25},'-=.25')
	.to(e.target, {clipPath: 'polygon(0 0, 100% 0, 100% 90%, 65% 120%, 65% 120%, 55% 120%, 45% 120%, 35% 120%, 35% 120%, 0 90%)', duration: .25},'-=.25')
	e.target.addEventListener('mouseleave', endAnimation)
}


Array.from(document.querySelectorAll('li')).forEach(ele => ele.addEventListener('mouseenter', clipAnimation))
