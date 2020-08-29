import UpdateResults from "../components/UpdateResults/index.js";
import { MoneyMask } from "../utils/Currency";
import { updateOnlineStatus } from "../components/Errors/UserOffline";
import { timeoutInternalError } from "../components/Errors/TimeoutInternalError";
import { delayMessages } from "../components/Errors/Delay";

const card = document.getElementById("card");
export const responseError = document.getElementById("error");
export let loading = false;

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
