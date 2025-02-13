import Logica from "../pages/logica";

describe('template spec', () => {
  before(() => {
    cy.visit('https://bugbank.netlify.app/');
  });
  it('Cadastrar e Logar', () => {
    Logica.cadastrar('teste','teste@gmail.com','12');
    Logica.logar('teste@gmail.com','12');
  })
})