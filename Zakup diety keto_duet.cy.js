/// <reference types="cypress" />


describe("E2E - Zakup diety keto_duet", () => {
    it("Proces zakupu", () => {
        cy.visit(Cypress.env("url"));

        cy.wait(1000);

        //Akceptowanie ciasteczek
        cy.get(".JS-rodo-button-text")
        .click({force: true});

        //Pobieranie głowy z przyciskiem "Kup dietę"
        cy.get('[class="keto-common-style keto-header"]');
        cy.contains('.keto-header > :nth-child(4)', 'Kup dietę');

        //Pobieranie górnego menu
        cy.get('[class="keto-header__main-navigation keto-header__main-navigation--is-offer"]')
        .find("li")
        .then(li => {
            expect(li).have.to.length(10);
        });

        //Kliknięcie w "Cennik"
        cy.get('.default-menu > :nth-child(5) > a')
        .should("contain", "Cennik")
        .and("have.attr", "href")
        .then(link => {
            cy.log(link);
        });

        cy.get('.default-menu > :nth-child(5) > a')
        .click();      

        //Pobieranie elementów cennika i kliknięcie w zakłądkę "DIETA DUET"
        cy.get("#choose-abonament")
        .find(".inner-container")
        .find(".solo-or-duet")
        .find("a")
        .should('have.length', 2)
        .eq(1)
        .click();

        cy.get("#choose-abonament")
        .find(".pricelist-tiles")
        .find("li")
        .then(li => {
            expect(li).have.to.length(4)
        });

        //Kliknięcie w "Kup teraz"
        cy.get(':nth-child(2) > .JS-with-dietitian.button-bordered')
        .should("contain", "Kup teraz")
        .click({force: true});

        //Pobieranie header z elementami
        cy.get('[class="keto-common-style keto-header"]')
        .find('.default-menu > :nth-child(1) > a')
        .should("contain", "Zaloguj");

        cy.get('[class="keto-common-style keto-header"]')
        .find('[title="Ketonline"]')
        .invoke("attr", "title")
        .then(title => {
            cy.log(title)
        });

        cy.get('.keto-header > :nth-child(4)')
        .should("contain", "Kup dietę");


        //Pobieranie elementów koszyka
        //1.Może Cię także zainteresować
        cy.get('[class="your-order__choose-additions payments__section"]')
        .find(".payments__section-title")
        .should("contain", "Masz już wszystko?");

        cy.get('[class="your-order__choose-additions payments__section"]')
        .find('[class="addition addition-ebook JS-addition"]')
        .find(".payments__custom-input")
        .then(input => {
            expect(input).to.have.length(2)
        });

        //2.Akceptujemy
        cy.get('[class="your-order__payment-type-info payments__section"]')
        .find(".payments__section-title")
        .should("contain", "Akceptujemy");

        cy.get('[class="your-order__payment-type-info payments__section"]')
        .find("ul")
        .then(ul => {
            expect(ul).to.have.length(2)
        });

        //3.Najczęściej zadawane pytania
        cy.get('[class="your-order__faq payments__section"]')
        .find(".JS-toggle-faq-a")
        .then(p => {
            expect(p).to.have.length(3)
        });

        //4.Przycisk "Cofnij"
        cy.get('.payments__go-back > a')
        .should("contain", "Cofnij");

        //5.Kod rabatowy
        cy.get('[class="title JS-toggle-pc-input-wrap "]');

        cy.wait(500)

        //6.Podsumowanie
        cy.get("#shoppingBasket")
        .should("contain", "Podsumowanie")
        .find('[class="payments__custom-button JS-validate-radios"]')
        .click({force: true});

        //Logowanie na konto
        cy.get('[class="payments__custom-button payments__custom-button--bordered JS-toggle-login-button"]')
        .should("contain", "Zaloguj się")
        .click({force: true});

        cy.get("#login").type("testowe_keto_para_keto");
        cy.get("#password").type("Takie#Latwe4");
        
        cy.get(".JS-form-submit-button")
        .first()
        .should("contain", "Zaloguj się")
        .click({force: true});

        //Pobieranie elementów zakładki "Płatność"

        //Nawigacja
        cy.get(".payments__navigation")
        .find("li")
        .then(li => {
            expect(li).have.to.length(2)
        });

        //Forma płatności
        cy.get(".payments__section-title")
        .should("contain", "Wybierz formę płatności");

        cy.get('[class="payment-method__choose-method payments__section"]')
        .find(".JS-main-form ")
        .find('[class="payment-methods-wrap JS-payment-method"]')
        .find(".payment-item")
        .then(item => {
            expect(item).have.to.length(34)
        });

        //PayPo
        cy.contains('[class="pay-po-title"]', 'Nie masz pieniędzy w tym momencie? Kup teraz, zapłać później z PayPo');

        //Checkbox
        cy.get(".payments__custom-input")
        .find("input")
        .then(checkbox => {
            cy.get(checkbox).check({force: true})
        });

        //Podsumowanie
        cy.get("#shoppingBasket")
        .find(".head")
        .should("contain", "Podsumowanie");

        cy.get("#shoppingBasket")
        .find(".body")
        .find(".package")
        .find('p[class="name"]');

        cy.get("#shoppingBasket")
        .find(".body")
        .find(".package")
        .find(".flex-wrap")
        .find("p")
        .then(p => {
            expect(p).have.to.length(2)
        });

        cy.get("#shoppingBasket")
        .find(".foot")
        .find(".total")
        .find("p")
        .then(p => {
            expect(p).have.to.length(4)
        });

        cy.get("#shoppingBasket")
        .find(".foot")
        .find(".security-info")
        .find('i[class="fas fa-lock"]')
        
        cy.get("#shoppingBasket")
        .find(".foot")
        .find('[class="payments__custom-button JS-validate-radios"]')
        .should("contain", "Zapłać")
        .click();


        //Walidacja
        cy.get('[class="JS-error-mf error"]')
        .should("contain", "Proszę wybrać jedną z metod płatności");


        //Wybór metody płatności
        cy.get(".payment-item")
        .eq(2)
        .trigger("focus")
        cy.get('img[src="https://static.przelewy24.pl/payment-form-logo/svg/222"]').click();

        //Kliknięcie w "Zapłać"
        cy.get('[class="payments__custom-button"]')
        .first()
        .should("contain", "Zapłać")
        .click();
        
    })
})