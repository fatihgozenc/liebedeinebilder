let startingX;

const handleTouchStart = (e) => {
	startingX = e.touches[0].clientX;
}

const handleTouchMove = (e) => {
	let touch = e.touches[0];
	let change = startingX - touch.clientX;

	if (change < 0) {
		return
	}

	e.currentTarget.style.left = `-${change}px`
	e.currentTarget.nextElementSibling.display = `block`
	e.currentTarget.nextElementSibling.left = `${window.innerWidth - change}px`

	e.preventDefault();
}

const handleTouchEnd = (e) => {
	let change = startingX - e.changedTouches[0].clientX;
	let threshold = window.width / 3;

	if (change < threshold) {
		e.currentTarget.style.left = 0;
		e.currentTarget.nextElementSibling.left = `100%`
		e.currentTarget.nextElementSibling.display = `none`
	} else {
		e.currentTarget.transition = `all .5s`;
		e.currentTarget.nextElementSibling.transition = `all .5s`;
		e.currentTarget.left = `-100%`;
		e.currentTarget.nextElementSibling.left = `0`;
		e.currentTarget.nextElementSibling.display = `block`;

	}
}