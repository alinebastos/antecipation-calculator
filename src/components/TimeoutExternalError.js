export const timeoutExternalError = (response) => {
  const responseError = document.getElementById("error");

  if (response.status === 408) {
    responseError.innerHTML = "Excedeu o tempo de resposta da API. Por favor, tente mais tarde.";
  }
  else if (response.status === 500) {
    responseError.innerHTML = "Internal Server Error. Por favor, tente mais tarde.";
  }
}
