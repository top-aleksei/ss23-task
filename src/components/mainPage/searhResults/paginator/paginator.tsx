import { useAppContext } from '../../../../reducer/filtersContext';
import { IState } from '../../../../reducer/models';
import s from './paginator.module.scss';

import { Pagination } from '@mantine/core';
import { fetchVacancies } from '../../../../service/superjob';
import { setFetchActivity, setPage, updateVacancies } from '../../../../reducer/actions';

function Paginator() {
  const { state, dispatch } = useAppContext();

  const totalPages =
    (state as IState).vacanciesState.total > 500 ? 125 : Math.ceil(state.vacanciesState.total / 4);

  const changePage = async (e: number) => {
    dispatch(setFetchActivity(true));
    dispatch(setPage(e));
    console.log(state.filtersState.page);
    const data = await fetchVacancies(state.filtersState, e);
    dispatch(updateVacancies(data));
    dispatch(setFetchActivity(false));
  };

  return (
    <div className={s.container}>
      <Pagination
        total={totalPages}
        value={state.filtersState.page}
        onChange={(e) => changePage(e)}
      />
    </div>
  );
}

export default Paginator;
