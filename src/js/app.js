import UpdateResults from "../components/UpdateResults.js";

// Money Input Mask

const money = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(+value.replace(/\D+/g, "") / 100);
}

amount.addEventListener(
  "input",
  (e) => {
    e.target.value = money(e.target.value);
  },
  false
);

// Post Data

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

const card = document.getElementById("card");

card.addEventListener("keyup", (event) => {

  const errorMessage = document.getElementById("error-message");
  const spinner = document.getElementById("spinner");
  let timer;

  clearTimeout(timer);

  errorMessage.classList.remove("show");
  
  timer = setTimeout(() => {
    if (amount.value && installments.value && mdr.value) {
      spinner.classList.add("show");
      postDataFunction();
      errorMessage.classList.remove("show");
    } else {
      errorMessage.classList.add("show");
    }
  }, 1000);
});

const postDataFunction = () => {

  const amount = document.getElementById("amount");
  const installments = document.getElementById("installments");
  const mdr = document.getElementById("mdr");

  postData("https://hash-front-test.herokuapp.com/", {
    amount: +amount.value.replace(/\D+/g, ""),
    installments: installments.value,
    mdr: mdr.value,
    days: [1, 15, 30, 90],
  }).then((data) => {
    spinner.classList.remove("show");
    UpdateResults(data);
  });
};
