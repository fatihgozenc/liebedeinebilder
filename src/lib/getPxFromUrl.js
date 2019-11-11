const getPxFromUrl = (url) => {
	const pattern = /(\d+)x(\d+)/;
	const match = pattern.exec(url);
	return [match[1], match[2]]
}

export default getPxFromUrl;
