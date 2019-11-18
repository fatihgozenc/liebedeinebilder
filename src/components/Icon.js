import React from 'react';

const Icon = (props) => {

	switch (props.name) {

		case ("people"):
			return (
				<svg className="icon icon--people"
					viewBox={`0 0 ${props.size} ${props.size}`}
					width={props.size}
					height={props.size}>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
				</svg>
			);

		case ("portfolio"):
			return (
				<svg className="icon icon--portfolio"
					viewBox={`0 0 ${props.size} ${props.size}`}
					width={props.size}
					height={props.size}>
					<path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>
			);

		case ("home"):
			return (
				<svg className="icon icon--home"
					viewBox={`0 0 ${props.size} ${props.size}`}
					width={props.size}
					height={props.size}>
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>
			);

		default:
			return null;

	}
}

export default Icon;