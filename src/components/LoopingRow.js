import React from 'react';
import LoopingItem from './LoopingItem';
import useCountRenders from '../utils/useCountRenders'

//FUNCTION FOR CLONING THE CHILDREN OF A DOM NODE.
const cloneChildren = (el) => {
	let items = Array.from(el.childNodes);
	items.forEach(function (item) {
		var clone = item.cloneNode(true);
		el.appendChild(clone);
	})
};

const LoopingRow = (props) => {

	//INITIAL DOM WITH IS 0 BECAUSE IMAGES WILL CHANGE SIZE DEPENDING ON SCREEN SIZE
	const [width, setWidth] = React.useState(0);
	const [canStart, setCanStart] = React.useState(false);
	const [transition] = React.useState(150);

	//AS A CALLBACK FUNCTION LOADED ITEM SENDS ITS WIDTH TO ROW ELEMENTS' STATE
	//AND WITH THE HELP OF REACT.MEMO ROW ELEMENT DOESN'T RE-RENDER
	const measure = React.useCallback((n) => {
		setWidth(c => Math.round((c + n) * 100) / 100)
		setCanStart(true)
	}, [setWidth]);

	const galleryRow = React.useRef();

	//THIS CUSTOM HOOK IS FOR TESTING RENDERING COUNT
	useCountRenders();

	React.useEffect(() => {

		//COMPONENTDIDMOUNT
		let row = galleryRow.current;
		console.log(`Rows have mounted.`)

		//IF ROW IS ABLE START TO ANIMATE AND ITS' WIDTH IS CALCULATED,
		//THEN CLONE THE CHILDREN
		if (canStart && width > 0) {
			cloneChildren(row)
			row.style.transitionDuration = `${transition}s`;
			row.style.transform = `translateX(-${width}px)`;
		}

		//COMPONENTWILLUNMOUNT
		return () => {

			if (canStart) {
				localStorage.setItem('shouldBeCloned', 'false')
				console.log('Rows have unmounted')
				row.style.transitionDuration = `0s`;
				row.style.transform = `translateX(0px)`;

			} else {
				return null
			}

		}
	}, [canStart, transition, width])

	const loopTheGallery = (e) => {

		//DETECTING IF TRANSITIONEND FIRES ON ROW ELEMENT ONLY
		if (e.target === galleryRow.current) {

			//RESETS CSS
			galleryRow.current.style.transitionDuration = `0s`;
			galleryRow.current.style.transform = `translateX(0px)`;

			//RE-INITIALIZING IT
			setTimeout(() => {
				galleryRow.current.style.transitionDuration = `${transition}s`;
				galleryRow.current.style.transform = `translateX(-${width}px)`;
			}, 1);

		}
	}

	return (

		<div
			className="looping_gallery_row"
			onTransitionEnd={loopTheGallery}
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
