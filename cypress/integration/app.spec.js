describe('Form', () => {
  it('should work', () => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        delete win.fetch
        win.fetch = function () {
          const response = {
            bpi: {
              USD: {
                code: 'USD',
                symbol: '&#36;',
                rate: '9,900.0004',
                description: 'United States Dollar',
                rate_float: 9900.0004,
              },
              GBP: {
                code: 'GBP',
                symbol: '&pound;',
                rate: '7,756.5778',
                description: 'British Pound Sterling',
                rate_float: 7756.5778,
              },
              EUR: {
                code: 'EUR',
                symbol: '&euro;',
                rate: '8,715.3921',
                description: 'Euro',
                rate_float: 8715.3921,
              },
            },
          }
          return Promise.resolve({
            json: () => response
          })
        }
      },
    })

    cy.get('button:first').click()
    cy.get('input[type="text"]').eq(0).should('have.value', '$ 9,900.00')
    cy.get('button:first').click()
    cy.get('input[type="text"]').eq(1).should('have.value', '£ 7,756.58')
    cy.get('button:first').click()
    cy.get('input[type="text"]').eq(2).should('have.value', '€ 8,715.39')

    cy.document().then((doc) => {
      expect(doc.querySelectorAll('select').length).to.eq(0)
    })

    cy.get('[type="number"]').type('{backspace}')
    cy.get('input[type="text"]').eq(0).should('have.value', '$ ')
    cy.get('input[type="text"]').eq(1).should('have.value', '£ ')
    cy.get('input[type="text"]').eq(2).should('have.value', '€ ')

    cy.get('[type="number"]').type('2')
    cy.get('input[type="text"]').eq(0).should('have.value', '$ 19,800.00')
    cy.get('input[type="text"]').eq(1).should('have.value', '£ 15,513.16')
    cy.get('input[type="text"]').eq(2).should('have.value', '€ 17,430.78')

    cy.get('button').eq(2).click()

    cy.get('select').should('have.value', 'EUR')
  })
})
