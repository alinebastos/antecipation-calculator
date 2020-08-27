import UpdateResults from "../components/UpdateResults.js";
import { MoneyMask } from "../components/MoneyMask";
import { delayMessages } from "../components/DelaySlowConection";
import { timeoutExternalError } from "../components/TimeoutExternalError";


// Post Data

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  timeoutExternalError(response);
  return response.json();
}


const card = document.getElementById("card");

card.addEventListener("keyup", (event) => {

  const errorMessage = document.getElementById("error-message");
  const spinner = document.getElementById("spinner");
  let timer;

  clearTimeout(timer); 
  
  if (amount.value && installments.value && mdr.value) {
    spinner.classList.add("show");
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
  const responseError = document.getElementById("error");
  loading = true;

  postData(
    "https://hash-front-test.herokuapp.com/",
    {
      amount: +amount.value.replace(/\D+/g, ""),
      installments: installments.value,
      mdr: mdr.value,
      days: [1, 15, 30, 90],
    }
  ).then((data) => {
    UpdateResults(data);
    spinner.classList.remove("show");
    loading = false;
    responseError.innerHTML = '';
  });
};


// Delay

const messages = [
  "Ainda buscando dados...",
  "A API está demorando, mas em alguns instantes ela volta...",
  "A conexão pode estar lenta...",
  "Está demorando mais que o esperado, aguarde...",
];

const delayMessages = () => {
  const responseError = document.getElementById("error");
  setTimeout(() => {
    if (!loading) return
      responseError.innerText =
        messages[Math.floor(Math.random() * messages.length)];
    delayMessages();
  }, 3000);
};
