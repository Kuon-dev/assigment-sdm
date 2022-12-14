describe('visit url', () => {
	it('access the web page with no errors', () => {
		cy.visit('https://assigment-sdm.vercel.app/');

		// get the items page
		cy.get('h2').contains('Itemz');
	});
});
