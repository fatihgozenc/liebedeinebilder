const setIntervalAndExecute = (fn, t) => {
	setTimeout(() => {
		fn();
	}, 1);
	return (setInterval(fn, t));
};