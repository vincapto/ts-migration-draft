import { CallbackSources } from '../app/app';
import { IData } from '../view/appView';
import { IArticle } from '../view/news/news';

interface IOptions {
  [x: string]: string;
}

interface IResponse {
  ok: boolean;
  status: number;
  statusText: string;
}

interface IReqOption {
  endpoint: string;
  options?: IOptions;
}

type Method = 'GET' | 'POST' | 'PUT';

class Loader {
  baseLink: string;
  options: IOptions;
  constructor(baseLink: string, options: IOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }
  errorCallback = () => {
    console.error('No callback for GET response');
  };
  getResp(
    { endpoint, options = {} }: IReqOption,
    callback: CallbackSources = this.errorCallback
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler<T extends IResponse>(res: T): T {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(
          `Sorry, but there is ${res.status} error: ${res.statusText}`
        );
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: IOptions, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(
    method: Method,
    endpoint: string,
    callback: (data: IData) => void,
    options = {}
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: IData) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
