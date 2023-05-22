/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { IVacancy } from '../../../../service/models';
import s from './favItem.module.scss';
import { useAppContext } from '../../../../reducer/filtersContext';
import { removeFromFavorite } from '../../../../reducer/actions';
import { createSalaryDescription } from '../../../../utils/createSalaryText';

function FavItem(props: any) {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const item: IVacancy = props.vacancy;

  const handleCardClick = () => {
    navigate(`vacancy/${item.id}`);
  };

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(removeFromFavorite(item.id));
  };

  return (
    <div className={s.item} onClick={handleCardClick} data-elem={`vacancy-${item.id}`}>
      <div className={s.item__header}>
        <p className={s.title}>
          {item.profession} {item.firm_name}
        </p>

        <button
          className={s['star-fav']}
          onClick={(e) => handleFavorite(e)}
          data-elem={`vacancy-${item.id}-shortlist-button`}
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

export default FavItem;
