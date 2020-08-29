import { loading, responseError } from "../../js/app";

const messages = [
  "Buscando dados...",
  "A API está demorando, mas em alguns instantes ela volta...",
  "A conexão pode estar lenta...",
  "Está demorando mais que o esperado, aguarde...",
];
export let delayMessages = () => {
  setTimeout(() => {
    if (!loading)
      return;
    responseError.innerText =
      messages[Math.floor(Math.random() * messages.length)];
    delayMessages();
  }, 2500);
};
