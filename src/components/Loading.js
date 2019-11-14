import React from 'react';

const Loading = () => {
	const itsLoading = React.useRef();

	return (
		<div className="loading_wrapper">
			<svg className="loading" ref={itsLoading}>
				<defs>
					<linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="#202020" />
						<stop offset="100%" stopColor="#af1030" />
					</linearGradient>
				</defs>
				<circle cx="80" cy="80" r="40" stroke="url(#linear)" fill="transparent" strokeWidth="2" />
			</svg>
			<h5>WIRD GELADEN</h5>
		</div>

	)
}

export default Loading;