let loading = false;

const messages = [
  'Ainda buscando dados...',
  'A API está demorando, mas em alguns instantes ela volta...',
  'A conexão pode estar lenta...',
  'Está demorando mais que o esperado, aguarde...'
];

export const delayMessages = () => {
  const responseError = document.getElementById("error");
  setTimeout(() => {
    if (!loading)
      responseError.innerText = messages[Math.floor(Math.random() * messages.length)];
    delayMessages();
  }, 3000);
};
