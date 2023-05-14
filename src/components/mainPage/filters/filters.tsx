import s from './filters.module.scss';
import { ICatalog } from '../../../service/models';
import { useAppContext } from '../../../reducer/filtersContext';
import SalaryBlock from './salary/salary';

import IndustryBlock from './industry/industry';
import { clearFilters } from '../../../reducer/actions';

function Filters(props: { catalog: ICatalog[] }) {
  const { state, dispatch } = useAppContext();

  const hadleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className={s.filters}>
      <div className={s.filters__header}>
        <span>Фильтры</span>
        <span onClick={hadleClearFilters}>сбросить всё</span>
      </div>

      <IndustryBlock catalog={props.catalog} />
      <SalaryBlock />
      <button className={s.filters__button} onClick={() => console.log(state)}>
        Применить
      </button>
    </div>
  );
}

export default Filters;
