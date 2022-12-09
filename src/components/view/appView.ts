import News from './news/news';
import Sources from './sources/sources';

import { INews } from './intecfaces';
import { ISourceClass } from './sources/sources';
import { IArticle, IData } from "../../interfaces/common";

type DrawFuncType = (data: IData) => void;

export interface IAppView {
  drawNews: DrawFuncType;
  drawSources: DrawFuncType;
}

export class AppView implements IAppView {
  news: INews;
  sources: ISourceClass;
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IData): void {
    const values: IArticle[] | [] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IData): void {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
