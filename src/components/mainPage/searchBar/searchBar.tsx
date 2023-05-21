import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import s from './searchBar.module.scss';
import { useAppContext } from '../../../reducer/filtersContext';
import { updateSearchWord } from '../../../reducer/actions';

function SearchBar() {
  const { state, dispatch } = useAppContext();

  const customStyles = {
    input: s.custom__input,
    icon: s.custom__icon,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchWord(e.target.value));
  };

  return (
    <TextInput
      icon={<IconSearch size="1.2rem" stroke={1.5} />}
      classNames={customStyles}
      rightSection={
        <button className={s.search__button} onClick={() => console.log(state)}>
          Поиск
        </button>
      }
      placeholder="Введите название вакансии"
      rightSectionWidth={42}
      value={state.filtersState.searchWord || ''}
      onChange={(e) => handleChange(e)}
    />
  );
}

export default SearchBar;
