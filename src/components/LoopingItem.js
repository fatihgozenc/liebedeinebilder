import React from 'react';
import getPxFromUrl from '../lib/getPxFromUrl';
import LoadingFrame from './LoadingFrame';
// import useCountRenders from '../utils/useCountRenders'
import { Link } from 'react-router-dom';

const LoopingItem = React.memo((props) => {

	const imgDimensions = getPxFromUrl(props.highResUrl);
	const imgWidth = imgDimensions[0];
	const imgHeight = imgDimensions[1];
	const imgRatio = Math.round((imgWidth / imgHeight) * 10000) / 10000;
	const imgDomWidth = Math.round(((window.innerHeight / 5.555) * imgRatio) * 100) / 100;

	React.useEffect(() => {
		props.measure(imgDomWidth)
	}, [imgDomWidth, props]);

	const filterSlug = props.category.filter(cat => cat !== "Best").toString()

	// useCountRenders();

	return (
		<Link to={`/${props.slug}`}>
			<div className="looping_gallery_item"
				category={filterSlug.toLowerCase()}
				style={{ width: `${imgDomWidth}px` }}>
				<img className="looping_gallery_item-img"
					onLoad={(e) => e.currentTarget.classList.add('loaded')}
					src={props.highResUrl}
					alt={props.alt} />
				<LoadingFrame width={imgDomWidth} />
				<div className="looping_gallery_item-text">
					<h5>{props.alt}<span>{filterSlug}</span></h5>
				</div>
			</div>
		</Link>
	)
});

export default LoopingItem;
