import {formatCurrency} from "../utils/format-price.js";

let tomorrowResult = document.getElementById("tomorrow");
let days15Result = document.getElementById("days15");
let days30Result = document.getElementById("days30");
let days90Result = document.getElementById("days90");

const UpdateResults = (data) => {
  tomorrowResult.textContent = formatCurrency(data[1] / 100);
  days15Result.textContent = formatCurrency(data[15] / 100);
  days30Result.textContent = formatCurrency(data[30] / 100);
  days90Result.textContent = formatCurrency(data[90] / 100);
};

export default UpdateResults;
