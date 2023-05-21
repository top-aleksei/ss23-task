import s from './favResults.module.scss';
import { useAppContext } from '../../../reducer/filtersContext';
import { IState } from '../../../reducer/models';
import { IVacancy } from '../../../service/models';
import FavItem from './favItem/favItem';
import FavPaginator from './favPaginator/favPaginator';
import { useState } from 'react';

function FavResults() {
  const { state } = useAppContext();
  const items = (state as IState).favoriteState;
  const [page, setPage] = useState(1);

  const mappingVacancies = items
    .filter((el, ind) => ind >= (page - 1) * 4 && ind < page * 4)
    .map((el: IVacancy) => {
      return <FavItem vacancy={el} key={el.id} />;
    });

  return (
    <div className={s.results}>
      <div className={s.list}>{mappingVacancies}</div>
      <FavPaginator items={items} page={page} setPage={setPage} />
    </div>
  );
}

export default FavResults;
