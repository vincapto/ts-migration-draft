import News from './news/news';
import Sources from './sources/sources';
import { IArticle, INews } from './news/news';
import { ISourceClass } from './sources/sources';

export interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}
export interface IData {
  articles: IArticle[];
  sources: ISource[];
}

export interface IAppView {
  drawNews: (d: IData) => void;
  drawSources: (d: IData) => void;
}

export class AppView {
  news: INews;
  sources: ISourceClass;
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IData) {
    const values: IArticle[] | [] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IData) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
