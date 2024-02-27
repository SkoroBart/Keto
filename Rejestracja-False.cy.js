/// <reference types="cypress" />

describe("E2E - Rejestracja bez danych", () => {
    it("Otwarcie formularza rejesteracji", () => {
        cy.visit(Cypress.env("url"));

        cy.wait(1000);

        //Akceptowanie ciasteczek
        cy.get(".JS-rodo-button-text")
        .click({force: true});

        //Kliknięcie w przycisk "Zaloguj"
        cy.contains(':nth-child(9) > a', 'Zaloguj')
        .should("contain", "Zaloguj")
        .and("have.attr", "href")
        .then(link => {
            cy.log(link)
            });

        cy.contains(':nth-child(9) > a', 'Zaloguj')
        .click ({force: true});

        //Kliknięcie w przycisk "Zarejestruj się"
        cy.contains('.red-box > .btn-white', 'Zarejestruj się')
        .should("have.attr", "href")
        .then(link => {
            cy.log(link)
            });
        
        cy.contains('.red-box > .btn-white', 'Zarejestruj się')
        .click ({force: true});

        //Kliknięcie w "Zarejestruj się" bez wprowadzania danych
        cy.get('[class="btn JS-form-submit-button"]')
        .should("contain", "Zarejestruj się")
        .click();

        //Pobieranie alertów
        cy.get("#registration-form")
        .find(".error-message")
        .then(alerty => {
            expect(alerty).to.have.length(7);
        });
        
    })
})