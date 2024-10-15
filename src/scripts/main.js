// Selecione os elementos do formulário
const form = document.querySelector('.login-form');
const emailInput = document.querySelector('#email');
const senhaInput = document.querySelector('#senha');

// Adicione um evento de submit ao formulário
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Valide o email e senha
  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();

  if (email === 'teste@teste.com' && senha === 'teste') {
    alert('E-mail e senha estão corretos!');
  } else {
    alert('E-mail e senha estão incorretos!');
  }
});