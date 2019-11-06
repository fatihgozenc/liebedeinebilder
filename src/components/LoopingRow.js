import React from 'react';
const LoopingItem = React.lazy(() => import('./LoopingItem'));

const LoopingRow = (props) => {

	const [count, setCount] = React.useState(0);

	const increment = React.useCallback((n) => {
		setCount(c => c + n)
	}, [setCount]);

	count === props.data.length
		? console.log("Low images have been loaded.")
		: console.log("Building DOM geometry, low images loading...")

	return (
		<div className="looping_gallery_row">
			{props.data.map(item => (
				<LoopingItem
					increment={increment}
					key={item.id}
					alt={item.title}
					lowResUrl={item.image.mini}
					highResUrl={item.image.medium}
				/>
			))}
		</div>
	)
}

export default LoopingRow;