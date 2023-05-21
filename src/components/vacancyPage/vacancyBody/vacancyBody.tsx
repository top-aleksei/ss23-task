/* eslint-disable @typescript-eslint/no-explicit-any */
import { IVacancy } from '../../../service/models';
import s from './vacancyBody.module.scss';

function VacancyBody(props: any) {
  const item: IVacancy = props.item;

  function createMarkup() {
    return { __html: `${item.vacancyRichText}` };
  }

  return <div className={s.item} dangerouslySetInnerHTML={createMarkup()}></div>;
}

export default VacancyBody;
