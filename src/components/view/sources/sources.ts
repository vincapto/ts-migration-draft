import { ISource } from "../../../interfaces/common";

import './sources.css';

export interface ISourceClass {
  draw: (data: ISource[]) => void;
}

class Sources implements ISourceClass {
  public draw(data: ISource[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector(
      '#sourceItemTemp'
    );

    data.forEach((item: ISource) => {
      const sourceClone = sourceItemTemp?.content.cloneNode(true) as HTMLElement;

      ((sourceClone.querySelector('.source__item-name')))!.textContent = item.name;
      sourceClone
        .querySelector('.source__item')
        ?.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources')?.append(fragment);
  }
}

export default Sources;
