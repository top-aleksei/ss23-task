import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import s from './searchBar.module.scss';
import { useAppContext } from '../../../reducer/filtersContext';
import {
  setFetchActivity,
  setPage,
  updateSearchWord,
  updateVacancies,
} from '../../../reducer/actions';
import { fetchVacancies } from '../../../service/superjob';

function SearchBar() {
  const { state, dispatch } = useAppContext();

  const customStyles = {
    input: s.custom__input,
    icon: s.custom__icon,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchWord(e.target.value));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setFetchActivity(true));
    dispatch(setPage(1));
    const data = await fetchVacancies(state.filtersState);
    await dispatch(updateVacancies(data));
    dispatch(setFetchActivity(false));
  };

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <TextInput
        icon={<IconSearch size="1.2rem" stroke={1.5} />}
        classNames={customStyles}
        rightSection={
          <button className={s.search__button} type="submit" data-elem="search-button">
            Поиск
          </button>
        }
        placeholder="Введите название вакансии"
        rightSectionWidth={42}
        value={state.filtersState.searchWord || ''}
        onChange={(e) => handleChange(e)}
        data-elem="search-input"
      />
    </form>
  );
}

export default SearchBar;
