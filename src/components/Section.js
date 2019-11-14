import React from 'react';

const Section = (props) => {

	switch (props.name) {
		case "personen":
			return (
				<section className="personen template">
					<h2>{props.data.abschnitte[1].excerpt}</h2>
					<span>{props.data.abschnitte[1].title}</span>

					{props.data.personen.map((person) => (
						<div key={person.id} className="person">
							<div className="person_img as_background" style={{ backgroundImage: `url(${person.image})` }} />
							<h3>{person.title}</h3>
							<p>{person.content}</p>
						</div>
					))}

				</section>
			);
		case "portfolio":
			return (
				<section className="portfolios template">
					<h2>{props.data.abschnitte[0].excerpt}</h2>
					<span>{props.data.abschnitte[0].title}</span>
					<p>{props.data.abschnitte[0].content}</p>

					{props.data.portfolios.map((portfolio) => (
						<div key={portfolio.id} className="portfolio">
							<div className="portfolio_img as_background" style={{ backgroundImage: `url(${portfolio.image})` }} />
							<h3>{portfolio.title}</h3>
							<p>{portfolio.content}</p>
						</div>
					))}

				</section>
			);
		case "agentur":
			return (
				<section className="agentur template">
					<h2>{props.data.abschnitte[2].excerpt}</h2>
					<span>{props.data.abschnitte[2].title}</span>
					<p>{props.data.abschnitte[2].content}</p>
					<div className="agentur_img as_background" style={{ backgroundImage: `url(${props.data.abschnitte[2].image})` }} />
				</section>
			);
		default:
			return null;
	}
}

export default Section;