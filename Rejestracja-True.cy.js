/// <reference types="cypress" />

describe("E2E - Proces rejestracji", () => {
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

        //Wpisywanie danych
        cy.get("#email")
        .type("przykladowy@test.pl");

        cy.get("#email_repeat")
        .type("przykladowy@test.pl");

        cy.get("#password")
        .type("przykladoweHaslo1");

        //Pobieranie checkboxów
        cy.get(".agreements")
        .find("input")
        .then(input => {
            expect(input).to.have.length(5)
        })
        .then(checkbox => {
            cy.get(checkbox).eq(1).check({force: true});
            cy.get(checkbox).eq(2).check({force: true});
        });

        //Pobieranie buttona "Zarejestruj się"
        cy.contains('[type="submit"]', ' Zarejestruj się ');
        
    })
})