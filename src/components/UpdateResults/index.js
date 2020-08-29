import { FormatCurrency } from "../../utils/Currency.js";

const UpdateResults = (data) => {

  const tomorrowResult = document.getElementById("tomorrow");
  const days15Result = document.getElementById("days15");
  const days30Result = document.getElementById("days30");
  const days90Result = document.getElementById("days90");

  tomorrowResult.textContent = isNaN(data[1])
    ? "R$ 0,00"
    : FormatCurrency(data[1] / 100);
  days15Result.textContent = isNaN(data[1])
    ? "R$ 0,00"
    : FormatCurrency(data[15] / 100);
  days30Result.textContent = isNaN(data[1])
    ? "R$ 0,00"
    : FormatCurrency(data[30] / 100);
  days90Result.textContent = isNaN(data[1])
    ? "R$ 0,00"
    : FormatCurrency(data[90] / 100);
};

export default UpdateResults;
