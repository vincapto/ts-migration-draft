import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '90dbc15f98f349dba569070590d09d2f', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
