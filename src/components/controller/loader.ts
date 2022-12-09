import { IData } from "../../interfaces/common";
import { CallbackSources } from "../../types/common";

type Options = Record<string, string> | object;

interface IReqOption {
  endpoint: string;
  options?: Options;
}

enum MethodList {
  GET,
  POST,
  PUT,
}

type Method = keyof typeof MethodList;

class Loader {
  baseLink: string;
  options: Options;
  constructor(baseLink: string, options: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  private errorCallback = () => {
    console.error('No callback for GET response');
  };

  public getResp(
    { endpoint, options = {} }: IReqOption,
    callback: CallbackSources = this.errorCallback
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler<T extends Response>(res: T): T {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(
          `Sorry, but there is ${res.status} error: ${res.statusText}`
        );
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: Options, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load(
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
