import { formatCurrency } from "../utils/format-price.js";

const UpdateResults = (data) => {

  const tomorrowResult = document.getElementById("tomorrow");
  const days15Result = document.getElementById("days15");
  const days30Result = document.getElementById("days30");
  const days90Result = document.getElementById("days90");

  tomorrowResult.textContent = formatCurrency(data[1] / 100);
  days15Result.textContent = formatCurrency(data[15] / 100);
  days30Result.textContent = formatCurrency(data[30] / 100);
  days90Result.textContent = formatCurrency(data[90] / 100);
};

export default UpdateResults;
