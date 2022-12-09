import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IData } from "../../interfaces/common";

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
        this.controller.getNews(e, (data: IData) => this.view.drawNews(data))
      );
    this.controller.getSources((data: IData) => this.view.drawSources(data));
  }
}

export default App;
