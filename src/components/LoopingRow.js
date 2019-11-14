import React from 'react';
import LoopingItem from './LoopingItem';
import useCountRenders from '../utils/useCountRenders'

const cloneChildren = (el) => {
	let items = Array.from(el.childNodes);
	items.forEach(function (item) {
		var clone = item.cloneNode(true);
		el.appendChild(clone);
	})
};

const setIntervalAndExecute = (fn, t) => {
	setTimeout(() => {
		fn();
	}, t / t);
	return (setInterval(fn, t));
};

const LoopingRow = (props) => {

	const [width, setWidth] = React.useState(0);
	const [canStart, setCanStart] = React.useState(false);
	const [transition] = React.useState(150);

	const measure = React.useCallback((n) => {
		setWidth(c => Math.round((c + n) * 100) / 100)
		setCanStart(true)
	}, [setWidth]);

	const galleryRow = React.useRef();

	useCountRenders();

	React.useEffect(() => {
		//COMPONENTDIDMOUNT
		let row = galleryRow.current;
		console.log(`Row has mounted.`)

		if (canStart && width > 0) {
			cloneChildren(row)
			setIntervalAndExecute(() => {
				console.log('Animation looped on row.')
				row.style.transitionDuration = `0s`;
				row.style.transform = `translateX(0px)`;
				setTimeout(() => {
					row.style.transitionDuration = `${transition}s`;
					row.style.transform = `translateX(-${width}px)`;
				}, 10);
			}, `${transition}200`);
		}

		//COMPONENTWILLUNMOUNT
		return () => {
			if (canStart) {
				localStorage.setItem('shouldBeCloned', 'false')
				console.log('Row has unmounted')
				row.style.transitionDuration = `0s`;
				row.style.transform = `translateX(0px)`;
			} else {
				return null
			}
		}
	}, [canStart, transition, width])

	return (
		<div className="looping_gallery_row"
			ref={galleryRow}>
			{props.data.map(item => (
				<LoopingItem
					measure={measure}
					key={item.id}
					slug={item.slug}
					alt={item.title}
					category={item.categories}
					highResUrl={item.image.medium}
				/>
			))}
		</div>
	)
}

export default LoopingRow;
