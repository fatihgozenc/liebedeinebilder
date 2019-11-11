import getPxFromUrl from './getPxFromUrl.js';

test('getPxFromUrl should get px units from API response', () => {
	const url = "http://liebedeinebilder.narciss-taurus.de/wordpress/wp-content/uploads/2014/05/Beichstuhl-205x300.jpg"

	const expected = ["205","300"];
	const received = getPxFromUrl(url);

	expect(received).toEqual(expected);

});
