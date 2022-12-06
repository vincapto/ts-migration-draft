import './sources.css';
import { ISource } from '../appView';

export interface ISourceClass {
  draw: (data: ISource[]) => void;
}

class Sources implements ISourceClass {
  public draw(data: ISource[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector(
      '#sourceItemTemp'
    ) as HTMLTemplateElement;

    data.forEach((item: ISource) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      (<HTMLElement>(
        sourceClone.querySelector('.source__item-name')
      )).textContent = item.name;
      sourceClone
        .querySelector('.source__item')
        ?.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources')?.append(fragment);
  }
}

export default Sources;
