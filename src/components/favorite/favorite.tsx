import { useAppContext } from '../../reducer/filtersContext';
import FavEmpty from './favEmpty/favEmpty';
import FavResults from './favResults/favResults';
import s from './favorite.module.scss';

function Favorite() {
  const { state } = useAppContext();

  return (
    <div className={s.page}>{state.favoriteState.length > 0 ? <FavResults /> : <FavEmpty />}</div>
  );
}

export default Favorite;
