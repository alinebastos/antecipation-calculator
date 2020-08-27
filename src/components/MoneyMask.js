export const money = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(+value.replace(/\D+/g, "") / 100);
};

amount.addEventListener(
  "input",
  (e) => {
    e.target.value = money(e.target.value);
  },
  false
);
