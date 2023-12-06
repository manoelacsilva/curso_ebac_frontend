/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('Manoela Coelho')
        cy.get('input[type="email"]').type('manoela@gmail.com')
        cy.get('input[type="tel"]').type('9 91030303')

        cy.get('.adicionar').click()
    })

    it('Deve editar o contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Teste')
        cy.get('[type="email"]').clear().type('testando@gmail.com')
        cy.get('[type="tel"]').clear().type('9 91020202')

        cy.get('.alterar').click()
    })

    it('Deve remover o contato', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
    })
})