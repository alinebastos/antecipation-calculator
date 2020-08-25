describe("Aplication Form", () => {
  it("The application successfully loads", () => {
    cy.visit("/");
  });

  it("Get error message if all the inputs are not filled", () => {
    cy.get(".input").clear();
    cy.get("#amount").type("999900").should("have.value", "R$ 9.999,00");
    cy.get("#installments").type("6").should("have.value", "6");
    cy.contains("Por favor, preencha todos os campos");
  });

  it("Fill the form inputs and get their values", () => {
    cy.get(".input").clear();
    cy.get("#amount").type("999900").should("have.value", "R$ 9.999,00");
    cy.get("#installments").type("6").should("have.value", "6");
    cy.get("#mdr").type("4").should("have.value", "4");
  });

  it("Send a request to get the calculation response", () => {
    cy.request("POST", "https://hash-front-test.herokuapp.com/", {
      amount: "R$ 9.999,00",
      installments: "6",
      mdr: "4",
      days: [1, 15, 30, 90],
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  })
});
