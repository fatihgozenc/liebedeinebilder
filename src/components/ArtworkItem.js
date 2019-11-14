import React from 'react';
import { Link } from 'react-router-dom';

const ArtworkItem = (props) => {

	const matchingIndex = props.data.findIndex((item, index) => (
		item.slug === props.routeSlug
	))
	// const prevArtwork = props.data[matchingIndex]
	const artwork = props.data[matchingIndex]
	const category = artwork.categories.toString();

	const othersInSameCategory = props.data.filter(artwork => {
		const regex = new RegExp(`^${category}`, 'gi');
		return artwork.categories.toString().match(regex)
	})

	const otherArtworkUrls = othersInSameCategory.map(item => item.image.full)
	console.log(otherArtworkUrls)

	let startingX = React.useRef(0);
	let centerX = React.useRef(0);
	let centerY = React.useRef(0);

	// const getCenterCoords = (e) => {
	// 	centerX = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2;
	// 	centerY = e.currentTarget.offsetTop + e.currentTarget.offsetHeight / 2
	// }

	const handleTouchStart = (e) => {
		console.log('touch started')
		centerX = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2;
		centerY = e.currentTarget.offsetTop + e.currentTarget.offsetHeight / 2
		startingX = e.touches[0].clientX;
	}

	const handleTouchMove = (e) => {
		console.log(centerX)

		let touch = e.touches[0];
		let change = startingX - touch.clientX;
		console.log(`Touch continues. Change is: ${change}px.`)

		if (change < 0) {
			return
		}

		e.currentTarget.parentElement.style.left = `-${change}px`;

		// e.currentTarget.nextElementSibling.display = `block`
		// e.currentTarget.nextElementSibling.left = `${window.innerWidth - change}px`

		// e.stopPropagation();
	}

	const handleTouchEnd = (e) => {
		console.log('touch finished')
		let change = startingX - e.changedTouches[0].clientX;
		let threshold = window.width / 3;
		e.currentTarget.parentElement.style.transform = `translateX(-100%)`

		// if (change < threshold) {
		// 	e.currentTarget.style.left = 0;
		// 	e.currentTarget.nextElementSibling.left = `100%`
		// 	e.currentTarget.nextElementSibling.display = `none`
		// } else {
		// 	e.currentTarget.transition = `all .5s`;
		// 	e.currentTarget.nextElementSibling.transition = `all .5s`;
		// 	e.currentTarget.left = `-100%`;
		// 	e.currentTarget.nextElementSibling.left = `0`;
		// 	e.currentTarget.nextElementSibling.display = `block`;

		// }
	}



	return (
		<>
			<Link to='/' ><button className="close">X</button></Link>

			<div className="artwork_group-wrapper">
				<div className="artwork_switcher">
					{
						othersInSameCategory.map(item => (
							<div className="artwork_item"
								// onClick={getCenterCoords}
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