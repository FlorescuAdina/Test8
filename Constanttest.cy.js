describe('Constant test and verification of input content', () =>{

it('I check a value from the input', () => {

cy.visit('https://google.com');


cy.get('#L2AGLb').click();

const googleSearch = cy.get('.gLFyf');


googleSearch.type('123');

googleSearch.should('have.value', '123')

})

})