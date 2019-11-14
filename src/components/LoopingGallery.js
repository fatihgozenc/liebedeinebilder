import React from 'react';
import LoopingGalleryFilter from './LoopingGalleryFilter';
const LoopingRow = React.lazy(() => import('./LoopingRow'));

const LoopingGallery = ({ data }) => {

	const distributeImageData = (arr, rows) => {
		const rowImgCount = Math.ceil((arr.length) / rows);
		const emptyData = Array.from({ length: rows }, () => [0]);
		const slicedData = emptyData.map((x, key) => {
			if (key === 0) {
				return arr.slice(key, rowImgCount)
			} else if (key === rows - 1) {
				return arr.slice((rowImgCount * key), -1)
			} else {
				return arr.slice((rowImgCount * key), (rowImgCount * (key + 1)))
			}
		})
		return slicedData;
	};
	const loopingRowData = distributeImageData(data, 4);
	// console.trace(LoopingRow)
	return (
		<div className="looping_gallery">
			{loopingRowData.map((rowData, key) => (
				<LoopingRow onLoad={console.log('row loaded')} key={key} number={key} data={rowData} />
			))}
			<LoopingGalleryFilter data={data} />
		</div>
	)
};

export default LoopingGallery;