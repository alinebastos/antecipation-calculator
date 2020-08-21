import UpdateResults from "./components/UpdateResults.js";

let card = document.querySelector("#card");
let amount = document.querySelector("#amount");
let installments = document.querySelector("#installments");
let mdr = document.querySelector("#mdr");
let errorMessage = document.querySelector("#error-message");
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
  errorMessage.classList.add("hidden") &&
  errorMessage.classList.remove("show");
  timer = setTimeout(() => {
    amount.value && installments.value && mdr.value
      ? postDataFunction()
      : errorMessage.classList.add("show") &&
        errorMessage.classList.remove("hidden");
  }, 1000);
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
