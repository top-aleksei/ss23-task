import s from './searchResults.module.scss';
import { useAppContext } from '../../../reducer/filtersContext';
import SearchItem from './searchItem/searchItem';
import { IVacancy } from '../../../service/models';
import Paginator from './paginator/paginator';
import LoaderComponent from '../../loader/loader';
import EmptyState from '../emptyState/emptyState';

function SearchBar() {
  const { state } = useAppContext();

  const mappingVacancies = state.vacanciesState.objects
    ? state.vacanciesState.objects.map((el: IVacancy) => {
        return <SearchItem vacancy={el} key={el.id} />;
      })
    : [];

  return state.isFetching ? (
    <LoaderComponent />
  ) : state.vacanciesState.total > 0 ? (
    <div className={s.results}>
      <div className={s.list}>{mappingVacancies}</div>
      <Paginator />
    </div>
  ) : (
    <EmptyState />
  );
}

export default SearchBar;
