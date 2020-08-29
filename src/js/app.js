import UpdateResults from "../components/UpdateResults.js";
import { MoneyMask } from "../utils/Currency";

const card = document.getElementById("card");
const responseError = document.getElementById("error");
let loading = false;

// Post Data

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  loading = false;

  timeoutInternalError(response);
  return response.json();
};

card.addEventListener("keyup", (event) => {
  const errorMessage = document.getElementById("error-message");
  const spinner = document.getElementById("spinner");

  if (amount.value && installments.value && mdr.value) {
    spinner.classList.add("show");
    loading = true;
    delayMessages();
    postDataFunction();
    errorMessage.classList.remove("show");
  } else {
    errorMessage.classList.add("show");
  }
});

const postDataFunction = () => {
  const amount = document.getElementById("amount");
  const installments = document.getElementById("installments");
  const mdr = document.getElementById("mdr");
  loading = true;

  postData("https://hash-front-test.herokuapp.com/", {
    amount: +amount.value.replace(/\D+/g, ""),
    installments: installments.value,
    mdr: mdr.value,
    days: [1, 15, 30, 90],
  }).then((data) => {
    UpdateResults(data);
    spinner.classList.remove("show");
  });
};

// Delay

const messages = [
  "Buscando dados...",
  "A API está demorando, mas em alguns instantes ela volta...",
  "A conexão pode estar lenta...",
  "Está demorando mais que o esperado, aguarde...",
];

let delayMessages = () => {
  setTimeout(() => {
    if (!loading) return;
    responseError.innerText =
      messages[Math.floor(Math.random() * messages.length)];
    delayMessages();
  }, 2500);
};

// Timeout or Internal Error

const timeoutInternalError = (response) => {
  responseError.innerText = "";

  if (response.status === 408) {
    responseError.innerHTML =
      "Excedeu o tempo de resposta da API. Por favor, tente mais tarde.";
  } else if (response.status === 500) {
    responseError.innerHTML =
      "Internal Server Error. Por favor, tente mais tarde.";
  }
};

// User offline

const updateOnlineStatus = () => {
  if (navigator.onLine) {
    responseError.innerHTML = "Sua conexão com a internet foi restabelecida.";
    setTimeout(() => (responseError.innerHTML = ""), 10000);
  } else {
    responseError.innerHTML = "Você está sem conexão com a internet.";
  }
};

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);
