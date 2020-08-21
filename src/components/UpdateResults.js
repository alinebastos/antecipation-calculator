import { format } from "../utils/format-price.js";

let tomorrowResult = document.querySelector("#tomorrow");
let days15Result = document.querySelector("#days15");
let days30Result = document.querySelector("#days30");
let days90Result = document.querySelector("#days90");

const UpdateResults = (data) => {
  tomorrowResult.textContent = format(data[1] / 100);
  days15Result.textContent = format(data[15] / 100);
  days30Result.textContent = format(data[30] / 100);
  days90Result.textContent = format(data[90] / 100);
};

export default UpdateResults;
