export const MoneyMask = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(+value.replace(/\D+/g, "") / 100);
};

amount.addEventListener(
  "input",
  (e) => {
    e.target.value = MoneyMask(e.target.value);
  },
  false
);

export const FormatCurrency = (value) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(value);
