/// <reference types="cypress" />

describe('ONGs', () => {
    it('deve poder realizar um cadastro', () => {
        cy.visit('http://localhost:3000/register');
        // cy.get - busca um elemento na tela
        // type - digitar um valor em um elemento
        cy.get('[data-cy=ong-name]').type('ONG Teste');
        cy.get('[data-cy=ong-email]').type('teste@exemplo.com');
        cy.get('[data-cy=ong-whatsapp]').type('11999999999');
        cy.get('[data-cy=ong-city]').type('São Paulo');
        cy.get('[data-cy=ong-uf]').type('SP');
        
        // routing - escutar uma rota
        // start server com cy.server()
        // cy.route - criar uma rota
        // atribuir um alias para a rota com as opções de método e url
        // esperar a rota com cy.wait()
        
        cy.route('POST', '**/ongs').as('postOng');

        cy.get('[data-cy=submit]').click();

        cy.wait('@postOng').then((xhr) => {
            expect(xhr.status).be.eq(200)
            expect(xhr.response.body).has.property('id')
            expect(xhr.response.body).is.not.null
        })
    });

    it('deve poder realizar um login no sistema', () => {
        // uma forma de não depender do test anterior, utilizar o cypress request para criar um usuário no sistema
        // Check support > commands
        cy.visit('http://localhost:3000');
        cy.get('[data-cy=ong-id]').type(Cypress.env('createdOngId'));
        cy.get('.button').click();
    });
});