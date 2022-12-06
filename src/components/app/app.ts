import AppController from '../controller/controller';
import { AppView, IData } from '../view/appView';

export type CallbackNews = (data: IData) => void;
export type CallbackEmpty = () => void;
export type CallbackSources = (data: IData) => void | CallbackEmpty;

class App {
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start() {
    document
      .querySelector('.sources')
      ?.addEventListener('click', (e: Event) =>
        this.controller.getNews(e, (data) => this.view.drawNews(data))
      );
    this.controller.getSources((data: IData) => this.view.drawSources(data));
  }
}

export default App;
