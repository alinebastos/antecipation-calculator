import { responseError } from '../../js/app';

export const updateOnlineStatus = () => {
  if (navigator.onLine) {
    responseError.innerHTML = 'Sua conexão com a internet foi restabelecida.';
    setTimeout(() => (responseError.innerHTML = ''), 8000);
  } else {
    responseError.innerHTML = 'Você está sem conexão com a internet.';
  }
};
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
