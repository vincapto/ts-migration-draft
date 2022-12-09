import { IData } from "../interfaces/common";

export type CallbackNews = (data: IData) => void;
export type CallbackEmpty = () => void;
export type CallbackSources = (data: IData) => void | CallbackEmpty;