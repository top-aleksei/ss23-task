/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useAppContext } from '../../../reducer/filtersContext';
import { IVacancy } from '../../../service/models';
import s from './vacancyTitle.module.scss';
import { IState } from '../../../reducer/models';
import { addToFavorite, removeFromFavorite } from '../../../reducer/actions';

function VacancyTitle(props: any) {
  const item: IVacancy = props.item;
  const { state, dispatch } = useAppContext();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    (state as IState).favoriteState.find((el) => el.id === item.id)
      ? setIsFavorite(true)
      : setIsFavorite(false);
  }, []);

  const hadleToggleFavorite = () => {
    isFavorite ? dispatch(removeFromFavorite(item.id)) : dispatch(addToFavorite([item]));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={s.item}>
      <div className={s.item__header}>
        <h2 className={s.title}>
          {item.profession} {item.firm_name}
        </h2>

        <button
          className={isFavorite ? s['star-fav'] : s.star}
          onClick={hadleToggleFavorite}
        ></button>
      </div>
      <div className={s.item__main}>
        <span className={s.salary}>
          з/п {item.payment_from} {item.payment_to ? `- ${item.payment_to}` : ''}
          {item.currency}
        </span>
        <span className={s.dot}> • </span>
        <span>{item.type_of_work.title}</span>
      </div>
      <div className={s.item__footer}>
        <div className={s.location}></div>
        <span>{item.town.title}</span>
      </div>
    </div>
  );
}

export default VacancyTitle;
