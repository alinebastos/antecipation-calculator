import UpdateResults from "./components/UpdateResults.js";

let card = document.getElementById("card");
let amount = document.getElementById("amount");
let installments = document.getElementById("installments");
let mdr = document.getElementById("mdr");
let errorMessage = document.getElementById("error-message");
let timer;

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

card.addEventListener("keyup", (event) => {
  clearTimeout(timer);
  errorMessage.classList.remove("show");
  timer = setTimeout(() => {
    amount.value && installments.value && mdr.value
      ? postDataFunction() && errorMessage.classList.remove("show")
      : errorMessage.classList.add("show")
  }, 500);
});

const postDataFunction = () => {
  postData("https://hash-front-test.herokuapp.com/", {
    amount: amount.value * 100,
    installments: installments.value,
    mdr: mdr.value,
    days: [1, 15, 30, 90],
  }).then((data) => {
    console.log(data);
    UpdateResults(data);
  });
};