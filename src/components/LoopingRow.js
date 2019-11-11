import React from 'react';
import useCountRenders from '../utils/useCountRenders'
const LoopingItem = React.lazy(() => import('./LoopingItem'));

const cloneChildren = (el) => {
	let items = Array.from(el.childNodes);
	items.forEach(function (item) {
		var clone = item.cloneNode(true);
		el.appendChild(clone);
	})
};

// var moving = false,
// 	el = document.getElementById("mover");
// el.className = el.className + " move-right";
// el.addEventListener('transitionend', function () {
// 	moving = true;
// });

// function getPosition() {
// 	var rect = el.getBoundingClientRect()
// 	console.log(rect.top, rect.left);
// 	if (!moving) {
// 		window.requestAnimationFrame(getPosition);
// 	}
// }
// window.requestAnimationFrame(getPosition);

const LoopingRow = React.memo((props) => {

	const [width, setWidth] = React.useState(0);
	const [position, setPosition] = React.useState(0)
	const [transition] = React.useState(180);
	const [moving, setMoving] = React.useState(true);

	const measure = React.useCallback((n) => {
		setWidth(c => Math.round((c + n) * 100) / 100)
		setPosition(c => Math.round((c + n) * 100) / 100)
	}, [setWidth, setPosition]);

	const galleryRow = React.useRef();

	React.useEffect(() => {
		if (width > 0) {
			setTimeout(() => { cloneChildren(galleryRow.current) }, 5000)
		}
	}, [width])

	// React.useEffect(() => {
	// 	function getPosition() {
	// 		var xCoord = Math.floor(galleryRow.current.getBoundingClientRect().x)
	// 		var originPos = -Math.round(width);
	// 		if (xCoord < -2 && originPos < -2 && xCoord === originPos) {
	// 			console.log(xCoord, originPos)
	// 			setMoving(!moving)
	// 		}
	// 		window.requestAnimationFrame(getPosition);
	// 	}
	// 	window.requestAnimationFrame(getPosition);
	// }, [moving, position, width])

	useCountRenders();

	// const loopIt = (e) => {
	// 	console.log(e.propertyName)
	// 	if (e.propertyName === "transform") {
	// 		e.currentTarget.style.transform = `translateX(0)`;
	// 		e.currentTarget.style.transitionDuration = `0s`;
	// 		setTimeout(() => {
	// 			e.persist()
	// 			galleryRow.current.style.transform = `translateX(-${position}px)`;
	// 			galleryRow.current.style.transitionDuration = `${transition}s`;
	// 		}, 1);
	// 	}

	// }

	const loopIt = (e) => {
		console.log(e)
		if (e.propertyName === "transform") {
			e.currentTarget.style.transform = `translateX(0)`;
			e.currentTarget.style.transitionDuration = `0s`;
			setTimeout(() => {
				galleryRow.current.style.transform = `translateX(-${position}px)`;
				galleryRow.current.style.transitionDuration = `${transition}s`;
			}, 1);
		}

	}

	// const getPosition = (e) => {
	// 		var rect = e.currentTarget.getBoundingClientRect()
	// 		console.log(rect.top, rect.left);
	// 		if (!moving) {
	// 			window.requestAnimationFrame(getPosition);
	// 		}
	// 	}
	// 	window.requestAnimationFrame(getPosition);

	// console.log(props)

	return (
		<div className="looping_gallery_row"
			style={{
				transform: `translateX(-${position}px)`,
				transitionDuration: `${transition}s`
			}}
			onTransitionEnd={(e) => {
				e.stopPropagation()
				loopIt(e)
			}}
			// onLoad={}
			ref={galleryRow}>
			{props.data.map(item => (
				<LoopingItem
					measure={measure}
					key={item.id}
					alt={item.title}
					category={item.categories}
					highResUrl={item.image.medium}
				/>
			))}
		</div>
	)
})

export default LoopingRow;
