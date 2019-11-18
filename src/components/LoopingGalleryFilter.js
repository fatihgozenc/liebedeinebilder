import React from 'react';

// const combineArrayAndRemoveDuplicates = (arr) => {
// 	let mergedData = [].concat.apply([], arr);
// 	let result = mergedData.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
// 	return result;
// };

// const except = (arrayGroup, key) => {
// 	var splicedArray = arrayGroup.slice();
// 	splicedArray.splice(key, 1);
// 	return splicedArray;
// };

const LoopingGalleryFilter = (props) => {

	const rawCategories = [].concat.apply([], props.data.map(item => item.categories));//MERGE ARRAYS
	const categories = rawCategories.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);//REMOVE DUPLICATES
	categories.splice(2, 1);//FOR 'BEST' CATEGORY SLICE
	// console.log(categories)

	const filterRef = React.createRef();

	// const filterItem = (e) => {
	// 	e.target.classList.toggle('filter-active');
	// 	let galleryParent = filterRef.current.parentElement;
	// 	let allItems = galleryParent.querySelectorAll('[category]');
	// 	let filteredItems = galleryParent.querySelectorAll('.gallery-item:not([category="' + e.target.innerHTML + '"])');
	// 	let allButtons = galleryParent.querySelectorAll('.filter-item');
	// 	allButtons.forEach((item) => {
	// 		item.classList.remove('filter-active')
	// 	})
	// 	allItems.forEach((item) => {
	// 		item.classList.remove('filter')
	// 	})
	// 	setTimeout(() => {
	// 		filteredItems.forEach((item) => {
	// 			item.classList.toggle('filter');
	// 		})
	// 	}, 1);
	// };

	// const resetFilter = (e) => {
	// 	e.target.classList.toggle('filter-active');
	// 	let galleryParent = filterRef.current.parentElement;
	// 	let allItems = galleryParent.querySelectorAll('[category]');

	// 	allItems.forEach((item) => {
	// 		item.classList.remove('filter')
	// 	})
	// }

	const filterItem = (e) => {
		const slug = e.target.innerText.toLowerCase();
		let galleryParent = filterRef.current.parentElement;
		// let allItems = galleryParent.querySelectorAll('[category]');
		let filteredItems = galleryParent.querySelectorAll('.looping_gallery_item:not([category="' + slug + '"])');
		// const pattern = /\/#([a-z]*)/;
		// const match = pattern.exec(e.target.href);
		// console.log(match[1], match[2]);
		console.log(slug, filteredItems)
	}

	return (
		<div className="looping-gallery-filter-wrapper">
			<div className="looping-gallery-filter" ref={filterRef}>
				<a className="filter-item filter-item-all" href="#alle" >Alle</a>
				{categories.map(category => (
					<a href={`#${category.toLowerCase()}`} className={'filter-item filter-item-' + category.toLowerCase()} onClick={filterItem} key={category}>{category}</a>
				))}
			</div>
		</div>
	)
};

export default LoopingGalleryFilter;