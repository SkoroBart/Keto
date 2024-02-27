/// <reference types="cypress" />


describe("E2E - Kliknięcie w button Kup dietę", () => {
    it("Otwarcie Cennika i pobranie jego elementów", () => {
        cy.visit(Cypress.env("url"));

        cy.wait(1000);

        //Akceptowanie ciasteczek
        cy.get(".JS-rodo-button-text")
        .click({force: true});

        //Pobranie i kliknięcie w "Kup dietę"
        cy.contains('.keto-header > :nth-child(4)', 'Kup dietę')
        .click({force: true});
        
        //Pobieranie pierwszej sekcji
        cy.get('[class="header-black span-red "]');
        
        //Pobieranie zakładek Dieta Solo / Dieta Duet
        cy.get(".solo-or-duet")
        .find("a")
        .then(a => {
             expect(a).to.have.length(2)
        })
        .eq(0)
        .should("contain", "Dieta solo");

        cy.get(".solo-or-duet")
        .find("a")
        .eq(1)
        .should("contain", "Dieta Duet");

        //Pobieranie przycisków wyboru rodzaju diety w zakładce "Dieta Solo"
        cy.get(".type-of-diet")
        .find("a")
        .then(a => {
             expect(a).to.have.length(2)
        })
        .eq(0)
        .should("contain", "Ketogeniczna");

        cy.get(".type-of-diet")
        .find("a")
        .eq(1)
        .should("contain", "Low Carb");

        //Pobieranie planów w zakładce "Dieta Solo"
        cy.get(".pricelist-tiles")
        .find("li")
        .then(li => {
            expect(li).to.have.length(4)
       });

       //Pobranie przycisków "Kup teraz" w zakładce "Dieta Solo"
      cy.get('.JS-with-dietitian.button-bordered')
      .should("contain", "Kup teraz")
      .and("have.attr", "href")
      .then(link => {
        cy.log(link)
        });

      cy.get('.JS-with-dietitian.button-bordered')
      .then(button => {
          expect(button).to.have.length(4)
      });

       //Kliknięcie w zakładkę "Dieta Duet"
       cy.get('[class=solo-or-duet]')
       .find("a")
       .eq(1)
       .click();

       //Pobieranie przycisków wyboru rodzaju diety w zakładce "Dieta Duet"
       cy.get(".type-of-diet")
       .find("a")
       .then(a => {
            expect(a).to.have.length(2)
       })
       .eq(0)
       .should("contain", "Ketogeniczna");

       cy.get(".type-of-diet")
       .find("a")
       .eq(1)
       .should("contain", "Low Carb");

       //Pobieranie planów w zakładce "Dieta Duet" / "Ketogeniczna"
       cy.get(".pricelist-tiles")
       .find("li")
       .then(li => {
           expect(li).to.have.length(4)
      });

      //Pobranie przycisków "Kup teraz" w zakładce "Dieta Duet" / "Ketogeniczna"
      cy.get('.JS-with-dietitian.button-bordered')
      .should("contain", "Kup teraz")

      cy.get('.JS-with-dietitian.button-bordered')
      .then(button => {
          expect(button).to.have.length(4)
      });

      //Kliknięcie w zakładkę "Low Carb"
      cy.get(".type-of-diet")
       .find("a")
       .eq(1)
       .should("contain", "Low Carb")
       .click();

      //Pobieranie planów w zakładce "Dieta Duet" / "Low Carb"
      cy.get(".pricelist-tiles")
      .find("li")
      .then(li => {
          expect(li).to.have.length(4)
        });

      //Pobranie przycisków "Kup teraz" w zakładce "Dieta Duet" / "Low Carb"
      cy.get('.JS-with-dietitian.button-bordered')
      .should("contain", "Kup teraz")

      cy.get('.JS-with-dietitian.button-bordered')
      .then(button => {
          expect(button).to.have.length(4)
      });

      //Powrót do zakładki "Ketogeniczna"
      cy.get(".type-of-diet")
       .find("a")
       .eq(0)
       .should("have.attr", "href")
       .then(link => {
        cy.log(link)
        });

      cy.get(".type-of-diet")
       .find("a")
       .eq(0)
       .should("contain", "Ketogeniczna")
       .click();

      //Powrót do zakładki "Dieta Solo"
      cy.get('[class=solo-or-duet]')
       .find("a")
       .eq(0)
       .should("have.attr", "href")
       .then(link => {
        cy.log(link)
        });
        
        cy.get('[class=solo-or-duet]')
       .find("a")
       .eq(0)
       .click({force: "true"});


    })
})