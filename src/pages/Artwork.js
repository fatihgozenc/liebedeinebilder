import React from 'react';
// import ArtworkItem from '../components/artwork-item.component';

const Artwork = (props) => {
	console.log(props)
	return (
		<div className="artwork">
			{/* <ArtworkItem /> */}
			this is: {props.match.params.slug}
		</div>
	)
};

export default Artwork;