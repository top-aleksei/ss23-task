import s from './filters.module.scss';
import { ICatalog } from '../../../service/models';
import { useAppContext } from '../../../reducer/filtersContext';
import SalaryBlock from './salary/salary';

import IndustryBlock from './industry/industry';
import { clearFilters, setFetchActivity, setPage, updateVacancies } from '../../../reducer/actions';
import { fetchVacancies } from '../../../service/superjob';

function Filters(props: { catalog: ICatalog[] }) {
  const { state, dispatch } = useAppContext();

  const hadleClearFilters = () => {
    dispatch(clearFilters());
  };

  const getVacancies = async () => {
    dispatch(setFetchActivity(true));
    dispatch(setPage(1));
    const data = await fetchVacancies(state.filtersState);
    await dispatch(updateVacancies(data));
    dispatch(setFetchActivity(false));
  };

  return (
    <div className={s.filters}>
      <div className={s.filters__header}>
        <span className={s.filters__title}>Фильтры</span>
        <div onClick={hadleClearFilters} className={s.filters__reset}>
          <span>Cбросить всё</span>
          <div className={s.filters__ico} />
        </div>
      </div>

      <IndustryBlock catalog={props.catalog} />
      <SalaryBlock />
      <button className={s.filters__button} onClick={getVacancies}>
        Применить
      </button>
    </div>
  );
}

export default Filters;
