export interface ISource {
	id: string;
	name: string;
	description: string;
	url: string;
	category: string;
	language: string;
	country: string;
}

interface ISourceArticle {
	id: string;
	name: string;
}

export interface IArticle {
	source: ISourceArticle;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}

export interface IData {
	articles: IArticle[];
	sources: ISource[];
}