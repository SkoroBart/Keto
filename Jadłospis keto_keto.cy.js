/// <reference types="cypress" />

describe("E2E - Kliknięcie w Jadłospis po zalogowaniu", () => {
    it("Pobieranie jadłospisu z jego elementami", () => {
        cy.visit(Cypress.env("url"));

        cy.wait(1000);

        //Akceptowanie ciasteczek
        cy.get(".JS-rodo-button-text")
        .click({force: true});

        //Kliknięcie w przycisk "Zaloguj"
        cy.contains(':nth-child(9) > a', 'Zaloguj')
        .click ({force: true});
        
        //Wpisywanie loginu i hasła
        cy.get("#login")
        .type("testowe_keto_keto");
        cy.get("#password")
        .type("Takie#Latwe4");
        
        //Logowanie
        cy.get(".JS-form-submit-button")
        .click ();

        cy.wait(500);
        
        //Pobieranie menu konta użytkownika
        cy.get(".logged-in-menu")
        .find("li")
        .then(li => {
            expect(li).to.have.length(3)
       });

       //Pominięcie tygodniowej kontroli postępów
       //cy.get(".kontrolaPostepow__buttons")
       //.find('[class="btn btn-primary btn-lg"]');

       //cy.get(".kontrolaPostepow__buttons")
       //.find('[class="btn btn-secondary"]')
       //.click();

        //Onbording, Zamykanie pop-upu
       //cy.get('[class="onboarding-button onboarding-close"]')
       //.click();

       //Pobieranie kontenera
        cy.get(".inner-container")
        .find("li")
        .then(li => {
            expect(li).to.have.length(3)
       });

       //Moja dieta
       cy.contains(':nth-child(1) > .button-bordered', 'Przejdź')
       .click();

       //Onbording, Zamykanie pop-upu
       cy.get('[class="onboarding-button onboarding-close"]')
       .click();

       //Zamykanie notyfikacji
       cy.get(".notification")
       .find('[class="far fa-times close-notification"]')
       .first().click();

       //Pobieranie zakładek jadłospisu
       cy.get('[class="keto-common-style keto-submenu JS-breadcrumbsSubmenu submenu-for-diet"]')
       .find("ul")
       .find("li")
       .then(li => {
            expect(li).to.have.length(4)
       });
       
       //Ebook - Keto na start
       cy.contains('.container > :nth-child(2) > a','Ebook - Keto na Start');

       //Pobieranie kalendarza
       cy.get('[class="diet-menu-day__date-menu category-el"]');

       //Pobieranie kontenera menu
       cy.get(".menu-container")
       .find(".meal");

       //Pobieranie paska "Posiłki" i kliknięcie w "Dodaj"
       cy.get(".keto-bar-add-new-meal")
       .find('[class="fas fa-plus"]')
       .click();

       //Zamykanie okienka informacyjnego class="tm-modal"
       cy.get(".tm-modal")
       .find('[class="tm-button standard-button"]', 'Zamknij')
       .click();

       //Pobieranie modułu dodawania produktu/potrawy
       cy.get(".meal-exchange-scroll-content");

       //Cofnięcie się do jadłospisu
       cy.get(".diet-menu-day-app__button-go-back")
       .click();

       //Pobieranie modułu Kawy kuloodpornej
       cy.get('[class="meal keto-coffee"]')
       .find(".meal-title")
       .should("contain", "Kawa kuloodporna");

       //Sprawdzanie elementów modułu karty posiłku
       cy.get(".menu-container")
       .find(".meal")
       .eq(1)
       .find(".item-container")
       .find(".item")
       .find(".meal-header-container")
       .find(".meal-image")
       .find(".dish-preparation-icon-type");

       //Pobieranie tytułu posiłku z przyciskiem 
       cy.get(".menu-container")
       .find(".meal")
       .eq(1)
       .find(".meal-title")
       .find(".meal-title__button");

       //Ranking potrawy
       cy.get(".menu-container")
       .find(".meal")
       .eq(1)
       .find(".meal-title")
       .find(".meal-rating");

       //Pobieranie przycisków akcji na posiłku
       cy.get(".menu-container")
       .find(".meal")
       .eq(1)
       .find(".meal-actions-container")
       .find("button")
       .then(button => {
        expect(button).to.have.length(4)
        });

        cy.get(".menu-container")
        .find(".meal")
        .eq(1)
        .find(".meal-actions-container")
        .find("button")
        .eq(0)
        .should("contain", "Wymień");

        cy.get(".menu-container")
        .find(".meal")
        .eq(1)
        .find(".meal-actions-container")
        .find("button")
        .eq(1)
        .should("contain", "Lubię");

        cy.get(".menu-container")
        .find(".meal")
        .eq(1)
        .find(".meal-actions-container")
        .find("button")
        .eq(2)
        .should("contain", "Nie lubię");

        cy.get(".menu-container")
        .find(".meal")
        .eq(1)
        .find(".meal-actions-container")
        .find("button")
        .eq(3)
        .should("contain", "Usuń");
        
        //Pobieranie sekcji składników z przyciskami
        cy.get(".meal-servings")
        .eq(1)
        .find(".meal-serving-box")
        .then(box => {
            expect(box).to.have.length(2)
       })

        .find("p")
        .then(p => {
            expect(p).to.have.length(5)
       });

       cy.get(".menu-container")
        .find(".meal")
        .eq(1)
        .find(".meal-ingredients")
        .find(".meal-editing-portion-scale")
        .find(".pencil-button");

        cy.get(".menu-container")
        .find(".meal")
        .eq(1)
        .find(".meal-ingredients")
        .find('a[class="standard-button edit-button"]')
        .should("contain", "Edytuj składniki");

        //Przepis
        cy.get(".menu-container")
        .find(".meal")
        .eq(1)
        .find(".meal-preparation-steps");


    //Pobieranie modułu nawodnienia
    cy.get(".diet-menu-day__water-needed")
    .find(".water-needed-container")
    .find(".water-condition-keto").should("contain", "Nawodnienie");

    cy.get(".diet-menu-day__water-needed")
    .find(".water-needed-container")
    .find(".water-condition-drops")
    .find(".drop")
    .then(drop => {
        expect(drop).to.have.length(10)
        });
    
    cy.get(".diet-menu-day__water-needed")
    .find(".water-needed-container")
    .find(".water-condition-box")
    .find("button")
    .then(button => {
        expect(button).to.have.length(2)
        });


    //Pobieranie wykresu makroskładników
    cy.get(".nutrients-pie-chart");

    //Rozwijanie szczegółów makroskładników
    cy.get(".nutrients-more-details")
    .click();

    //Mój dietetyk + przycisk
    cy.get(".diet-menu-day__dietitian-actions")
    .find(".dietitian-button")
    .should("contain", "Wyślij wiadomość");

    //Pobieranie submenu z przyciskami
    cy.get(".submenu-actions-container")
    .find('[class="standard-button submenu-actions-link"]')
    .then(button => {
        expect(button).to.have.length(4)
        });
    
    cy.get(".submenu-actions-container")
    .find('[class="standard-button submenu-actions-link"]')
    .eq(0)
    .should("contain", "Jadłospis w PDF");

    cy.get(".submenu-actions-container")
    .find('[class="standard-button submenu-actions-link"]')
    .eq(1)
    .should("contain", "Lista ulubionych potraw");

    cy.get(".submenu-actions-container")
    .find('[class="standard-button submenu-actions-link"]')
    .eq(2)
    .should("contain", "Widok całego tygodnia");

    cy.get(".submenu-actions-container")
    .find('[class="standard-button submenu-actions-link"]')
    .eq(3)
    .should("contain", "Pomiary");


    })
  })