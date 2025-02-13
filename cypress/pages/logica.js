class Logica {
  constructor() {
    // Elementos da página
    this.btnRegistrar = ".ihdmxA";
    this.emailInput = 'input[name="email"]';
    this.nameInput = 'input[name="name"]';
    this.passwordInput = 'input[name="password"]';
    this.passwordConfirmInput = 'input[name="passwordConfirmation"]';
    this.btnCadastrar = "button:contains('Cadastrar')";
    this.btnFecharModal = "a#btnCloseModal";
    this.btnAcessar = "button:contains('Acessar')";
    this.homeImg = 'img[data-nimg="intrinsic"]';
  }

  cadastrar(nome, email, senha) {
    cy.get(this.btnRegistrar).click();
    cy.get(this.nameInput).type(nome, { force: true });
    cy.get(this.emailInput).eq(1).type(email, { force: true });
    cy.get(this.passwordInput).eq(1).type(senha, { force: true });
    cy.get(this.passwordConfirmInput).type(senha, { force: true });
    cy.get(this.btnCadastrar).click({ force: true });
    cy.get(this.btnFecharModal).click();
  }

  logar(email, senha) {
    cy.get(this.emailInput).eq(0).type(email, { force: true });
    cy.get(this.passwordInput).eq(0).type(senha, { force: true });
    cy.get(this.btnAcessar).click({ force: true });
    cy.url().should('include', '/home');
    cy.get(this.homeImg).should('be.visible');
  }
}

export default new Logica();
