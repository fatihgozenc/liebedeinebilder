import React from 'react';

const LoopingItem = React.memo((props) => {

	const highResLoaded = (e) => {
		console.log('high laoded')
	}

	return (
		<div className="looping_gallery_item">
			<div className="bg_img looping_gallery_item-img"
				style={{ backgroundImage: `url(${props.highResUrl})` }}
				onLoadedData={highResLoaded} >
				<img className="looping_gallery_item-loader"
					onLoad={() => props.increment(1)}
					alt={`${props.alt}`}
					src={props.lowResUrl}
				/>
			</div>
		</div>
	)
});

export default LoopingItem;