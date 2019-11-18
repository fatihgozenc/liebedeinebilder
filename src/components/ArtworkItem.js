import React from 'react';
import { Link } from 'react-router-dom';

const ArtworkItem = (props) => {

	// GET VIEWED ARTWORK'S INDEX FROM PROPS.DATA
	const matchingIndex = props.data.findIndex((item, index) => (
		item.slug === props.routeSlug
	))


	// THIS IS THE ARTWORK THAT NEEDS TO BE VIEWED INITIALLY.
	const artwork = props.data[matchingIndex]


	// CONVERTING ITS CATEGORIES TO STRING TO FIND SAME CATEGORIES IN PROPS.DATA.
	const category = artwork.categories.toString();


	//FINDING OTHER ITEMS IN THE SAME CATEGORY WITH VIEWED ARTWORK.
	const othersInSameCategory = props.data.filter(artwork => {
		const regex = new RegExp(`^${category}`, 'gi');
		return artwork.categories.toString().match(regex)
	})

	// GETTING OTHER ITEMS' URLS
	const otherArtworkUrls = othersInSameCategory.map(item => item.image.full)


	// FINDING VIEWED ARTWORK'S INDEX IN OTHER ITEMS' URLS 
	const matchingUrlIndex = otherArtworkUrls.findIndex((item, index) => (
		item === artwork.image.full
	));


	//SETTING THIS INDEX AS AN INITIAL PROP TO SET CORRECT POSITION TO TRANSLATEX
	const [artworkIndex, setArtworkIndex] = React.useState(matchingUrlIndex);


	//TOUCH ANIMATION ===============
	let artworkRef = React.useRef();
	let startingX = React.useRef(0);
	let startingY = React.useRef(0);
	let centerX = React.useRef(0);
	let centerY = React.useRef(0);
	let startTime = React.useRef(0);
	let finishTime = React.useRef(0);

	const handleTouchStart = (e) => {
		centerX = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2;
		centerY = e.currentTarget.offsetTop + e.currentTarget.offsetHeight / 2;
		startingX = e.touches[0].clientX;
		startingY = e.touches[0].clientY;
		e.stopPropagation();
		startTime = Date.now()
		return false;
	}

	const handleTouchMove = (e) => {

		document.body.style.overflow = `hidden`
		let touch = e.touches[0];
		let change = startingX - touch.clientX;
		let changeY = startingY - touch.clientY;
		let scaleRatio;


		console.log(`
			Touch continues.
			Start time: ${startTime},
			Now: ${Date.now()},
			Item Origin: X:${centerX}, Y:${centerY}
			Change is: ${change}px.
			Index: ${artworkIndex}
			OffsetLeft:${e.currentTarget.offsetLeft}.
		`)

		e.currentTarget.parentElement.style.transitionDuration = `0ms`;
		e.currentTarget.parentElement.style.transformOrigin = `${centerX}px ${centerY}px`;
		// e.currentTarget.style.boxShadow = `0 11px ${Math.abs(change)}px -6px #131313`
		e.currentTarget.style.boxShadow = `0 11px 30px -6px #131313`

		if (artworkIndex === 0) {
			e.currentTarget.nextElementSibling.style.boxShadow = `0 11px 30px -6px #131313`
			e.currentTarget.nextElementSibling.style.transitionDelay = `0ms`
		} else if (artworkIndex === otherArtworkUrls.length - 1) {
			e.currentTarget.previousElementSibling.style.boxShadow = `0 11px 30px -6px #131313`
			e.currentTarget.previousElementSibling.style.transitionDelay = `0ms`
		} else {
			e.currentTarget.nextElementSibling.style.boxShadow = `0 11px 30px -6px #131313`
			e.currentTarget.previousElementSibling.style.boxShadow = `0 11px 30px -6px #131313`
			e.currentTarget.nextElementSibling.style.transitionDelay = `0ms`
			e.currentTarget.previousElementSibling.style.transitionDelay = `0ms`
		}


		if (change > 0) {
			scaleRatio = `0.${1000 - change}`;
			e.currentTarget.style.transitionDuration = `0ms`
			e.currentTarget.style.transitionDelay = `0ms`
			e.currentTarget.style.transform = `scale(${scaleRatio})`;
			e.currentTarget.parentElement.style.transform = `translateX(-${e.currentTarget.offsetLeft + change}px) scale(${scaleRatio})`;
		} else if (change < 0) {
			scaleRatio = `0.${1000 - Math.abs(change)}`;
			e.currentTarget.style.transitionDuration = `0ms`
			e.currentTarget.style.transitionDelay = `0ms`
			e.currentTarget.style.transform = `scale(${scaleRatio})`;
			e.currentTarget.parentElement.style.transform = `translateX(-${e.currentTarget.offsetLeft + change}px) scale(${scaleRatio})`;
		}

		e.stopPropagation();
		return false;

	}

	const handleTouchEnd = (e) => {
		document.body.style.overflow = `initial`

		let change = startingX - e.changedTouches[0].clientX;
		let target = e.currentTarget;
		let switcherWidth = artworkRef.current.offsetWidth * (otherArtworkUrls.length - 1)

		let threshold = window.innerWidth / 3;
		let currentPos = e.currentTarget.offsetWidth * artworkIndex;
		let prevPos = e.currentTarget.offsetWidth * (artworkIndex - 1);
		let artworkCSSWidth = (window.innerWidth - ((window.innerWidth / 20) * 2));
		let currentPosCSS = artworkCSSWidth * artworkIndex;
		let prevPosCSS = artworkCSSWidth * (artworkIndex - 1);

		e.currentTarget.parentElement.style.left = `0px`
		e.currentTarget.parentElement.style.transitionDuration = `500ms`

		if (artworkIndex === 0) {
			target.style.transitionDelay = `0ms`
			target.nextElementSibling.style.boxShadow = `initial`
		} else if (artworkIndex === otherArtworkUrls.length - 1) {
			target.style.transitionDelay = `0ms`
			target.previousElementSibling.style.boxShadow = `initial`
		} else if (e.currentTarget.offsetLeft === 0 || currentPos !== switcherWidth) {
			target.style.transitionDelay = `500ms`
			target.nextElementSibling.style.boxShadow = `initial`
			target.nextElementSibling.style.transitionDuration = `500ms`
			target.previousElementSibling.style.boxShadow = `initial`
			target.previousElementSibling.style.transitionDuration = `500ms`
		}

		target.style.transitionDuration = `500ms`
		target.style.boxShadow = `initial`

		target.style.backgroundColor = `initial`
		target.style.transform = `initial`

		finishTime = Date.now();
		let timePassed = finishTime - startTime;

		console.log(`
			Touch finished.
			Time passed: ${timePassed}ms
			Position: ${currentPos}
			Item Key: ${artworkIndex}
			Change:${change}px
			Threshold: ${threshold}
			Width: ${e.currentTarget.offsetWidth}
			Switcher Width: ${switcherWidth}
		`)

		if (change > threshold && currentPos !== switcherWidth) {
			e.currentTarget.parentElement.style.transform = `translateX(-${currentPos}px) scale(1.000)`;
			e.stopPropagation();
			setArtworkIndex(artworkIndex + 1)
		} else if (change < -threshold) {
			e.currentTarget.parentElement.style.transform = `translateX(-${prevPos}px) scale(1.000)`;
			e.stopPropagation();
			setArtworkIndex(artworkIndex === 0 ? 0 : (artworkIndex - 1))
		} else if (currentPos === switcherWidth) {
			console.log('You\'ve reached the end.')
			e.currentTarget.parentElement.style.transform = `translateX(-${currentPos}px) scale(1.000)`;
			e.stopPropagation();
		} else {
			e.currentTarget.parentElement.style.transform = `translateX(-${currentPosCSS}px) scale(1.000)`;
		}
		return false;
	}

	return (
		<>
			<Link to='/' ><button className="close">X</button></Link>
			<div className="artwork_group-wrapper">
				<div className="artwork_switcher"
					style={{
						transform: `translateX(-${(window.innerWidth - ((window.innerWidth / 20) * 2)) * artworkIndex}px)`
					}}>
					{
						othersInSameCategory.map((item, key) => (
							<div className="artwork_item"
								ref={artworkRef}
								// style={{ zIndex: `${key}` }}
								onTouchStart={handleTouchStart}
								onTouchMove={handleTouchMove}
								onTouchEnd={handleTouchEnd}
								key={item.id}>
								<div className="artwork_img bg_img" style={{ backgroundImage: `url(${item.image.full})` }} />
								<h1 className="artwork_title">{item.title}</h1>
								<div className="artwork_categories">{item.categories.toString()}</div>
							</div>
						))
					}
				</div>
			</div>
		</>
	)
}

export default ArtworkItem;