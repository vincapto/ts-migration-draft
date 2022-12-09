import { IArticle } from "../../interfaces/common";

export interface INews {
	draw: (data: IArticle[]) => void;
}