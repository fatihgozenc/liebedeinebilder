import React from 'react';
import getPxFromUrl from '../lib/getPxFromUrl';
import LoadingFrame from './LoadingFrame'

const LoopingItem = React.memo((props) => {

	const imgDimensions = getPxFromUrl(props.highResUrl);
	const imgWidth = imgDimensions[0];
	const imgHeight = imgDimensions[1];
	const imgRatio = Math.round((imgWidth / imgHeight) * 10000) / 10000;
	const imgDomWidth = Math.round(((window.innerHeight / 5.555) * imgRatio) * 100) / 100;

	React.useEffect(() => {
		props.measure(imgDomWidth)
	}, [imgDomWidth, props]);

	const filterSlug = props.category.filter(cat => cat !== "Best").toString().toLowerCase()
	const imgHovered = (e) => {
		e.persist()
		e.stopPropagation()
		console.log(e.currentTarget)
	}
	return (
		<div className="looping_gallery_item"
			onMouseEnter={imgHovered}
			category={filterSlug}
			style={{ width: `${imgDomWidth}px` }}>
			<LoadingFrame width={imgDomWidth} />
			<img className="looping_gallery_item-img"
				src={props.highResUrl}
				alt={props.alt} />
		</div>
	)
});

export default LoopingItem;
