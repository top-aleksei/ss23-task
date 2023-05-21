/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { IVacancy } from '../../../../service/models';
import s from './searchItem.module.scss';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../../../reducer/filtersContext';
import { addToFavorite, removeFromFavorite } from '../../../../reducer/actions';

import { IState } from '../../../../reducer/models';
import { createSalaryDescription } from '../../../../utils/createSalaryText';

function SearchItem(props: any) {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  const item: IVacancy = props.vacancy;
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    (state as IState).favoriteState.find((el) => el.id === item.id)
      ? setIsFavorite(true)
      : setIsFavorite(false);
  }, []);

  const handleCardClick = () => {
    navigate(`vacancy/${item.id}`);
  };

  const hadleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    isFavorite ? dispatch(removeFromFavorite(item.id)) : dispatch(addToFavorite([item]));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={s.item} onClick={handleCardClick}>
      <div className={s.item__header}>
        <p className={s.title}>
          {item.profession} {item.firm_name}
        </p>

        <button
          className={isFavorite ? s['star-fav'] : s.star}
          onClick={(e) => hadleToggleFavorite(e)}
        ></button>
      </div>
      <div className={s.item__main}>
        <span className={s.salary}>
          з/п {createSalaryDescription(item.payment_from, item.payment_to, item.currency)}
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

export default SearchItem;
