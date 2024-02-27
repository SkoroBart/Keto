/// <reference types="cypress" />


describe("E2E - Strona glowna KetOnline", () => {
    it("Elementy na stronie glownej", () => {
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

        //Asercja zakładek górnego menu
        cy.get('a[class="active"]').first().should("contain", "Dieta ketogeniczna");
        cy.get('.default-menu > :nth-child(2) > a').should("contain", "Dieta low carb");
        cy.get('.default-menu > :nth-child(3) > a').should("contain", "Dieta dla par");
        cy.get('.default-menu > :nth-child(4) > a').should("contain", "Keto Lunch Box");
        cy.get('.default-menu > :nth-child(5) > a').should("contain", "Cennik");
        cy.get('.default-menu > :nth-child(6) > a').should("contain", "Keto Kalkulator");
        cy.get('.default-menu > :nth-child(7) > a').should("contain", "Historie sukcesu");
        cy.get(':nth-child(8) > a').should("contain", "Blog");


        //Pobieranie pierwszej sekcji z buttonami - Offer intro
        cy.get(".offer__intro")
        .find('[class="link offer-example-menu-circle"]')
        .should("contain", "Zobacz przykładowe KetOmenu");

        cy.get(".offer__intro")
        .find('[class="button-bordered"]')
        .should("contain", "Kupuję KetOnline");

        //Pobieranie obrazka z weryfikacją właściwości CSS
        cy.get('[class="offer__why-try"]')
        .find('[class="bg"]')
        .should("have.css", "width", "1840px")
        .and("have.css","height", "814px");

        //Pobieranie drugiej sekcji z elementami - What Stand Out
        cy.get('[class="offer__what-stand-out JS-whatStandOut"]')
        .should("have.class", "offer__what-stand-out")
        .find(".inner-container")
        .find('[class="logo"]');

        cy.get('[class="offer__what-stand-out JS-whatStandOut"]')
        .find(".offer-example-menu-rectangle")
        .should("contain", "Zobacz przykładowe keto menu");

        //Pobieranie 3 sekcji z przyciskiem
        cy.get('[class="offer__self-promo"]')
        .find('[class="button-bordered"]')
        .should("contain", "Kupuję KetOnline");

        //Pobieranie 4 sekcji z przyciskiem
        cy.get('[class="offer__keto-cat"]')
        .find('[class="button-bordered"]')
        .should("contain", "Kupuję KetOnline");

        //Pobieranie 5 sekcji z przyciskiem - Co otrzymasz w pakiecie?
        cy.get('[class="offer__features"]')
        .find('[class="button-bordered button-bordered--border-white"]')
        .should("contain", "Kupuję KetOnline");

        //Pobieranie 6 sekcji z przyciskiem - Keto w duecie
        cy.get("#ketoCouple")
        .find('[class="button-bordered button-bordered--border-white"]');

        //Pobiernie 7 sekcji - Offer comparison
        cy.get('[class="offer__comparison"]');

        //Pobieranie 8 sekcji - Baza Plus
        cy.get('[class="keto-plus-offer-section"]');

        //Pobieranie cennika na stronie głównej
        cy.get("#choose-abonament")
        .find(".inner-container")
        .find(".solo-or-duet")
        .find("a")
        .should('have.length', 2)
        .end();

        cy.get("#choose-abonament")
        .find(".pricelist-tiles")
        .find("li")
        .then(li => {
            expect(li).have.to.length(4)
        });

        //Pobieranie 9 sekcji - Opinie użytkowników KetOnline
        cy.get(".opinion-list")
        .find(".btn")
        .invoke("attr", "href")
        .then(link => {
            cy.log(link)
        });

        cy.get(".opinion-list")
        .find(".btn")
        .invoke("attr", "title")
        .then(title => {
            cy.log(title);
        });
        
        //Pobieranie 10 sekcji - Najbardziej przydatne opinie:
        cy.get("#kom")
        .should("have.class", "opinion-list__main");


        //Pobieranie stopki z elementami
        cy.get(".footer")
        .find(".footer__copy > a")
        .should("have.attr", "href")
        .then(href => {
            expect(href).to.have.contain("/")
        });

        cy.get(".footer__first-menu")
        .find("ul")
        .find("li")
        .then(li => {
            expect(li).to.have.length(4)
        });

        cy.get(".footer__second-menu > ul")
        .find("li")
        .eq(0)
        .find("a")
        .should("have.attr", "href")
        .then(href => {
            expect(href).to.have.contain("https://www.facebook.com/ketonlinepl/")
        });
        
        cy.get(".footer__second-menu > ul")
        .find("li")
        .eq(1)
        .find("a")
        .should("have.attr", "href")
        .then(href => {
            expect(href).to.have.contain("https://www.instagram.com/ketonline.pl/")
        });

    })
})