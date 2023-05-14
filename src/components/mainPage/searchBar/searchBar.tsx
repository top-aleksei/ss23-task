import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import s from './searchBar.module.scss';
import { useAppContext } from '../../../reducer/filtersContext';
import { updateSearchWord } from '../../../reducer/actions';

function SearchBar() {
  const { state, dispatch } = useAppContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchWord(e.target.value));
  };

  return (
    <TextInput
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="xl"
      size="md"
      rightSection={<button className={s.search__button}>поиск</button>}
      placeholder="Search questions"
      rightSectionWidth={42}
      value={state.searchWord || ''}
      onChange={(e) => handleChange(e)}
    />
  );
}

export default SearchBar;
