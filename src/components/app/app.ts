import AppController from '../controller/controller';
import { AppView, IAppView, IData } from '../view/appView';
import { IController } from '../controller/controller';

export type CallbackNews = (data: IData) => void;
export type CallbackSources = (data: IData) => void | CallbackEmpty;
export type CallbackEmpty = () => void;

class App {
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    document
      .querySelector('.sources')
      .addEventListener('click', (e) =>
        this.controller.getNews(e, (data) => this.view.drawNews(data))
      );
    this.controller.getSources((data: IData) => this.view.drawSources(data));
  }
}

export default App;
