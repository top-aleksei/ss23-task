import { useNavigate } from 'react-router-dom';
import s from './favEmpty.module.scss';

function FavEmpty() {
  const navigate = useNavigate();

  const handleHomeNavigate = () => {
    navigate('/');
  };

  return (
    <div className={s.page}>
      <div className={s.image}></div>
      <span className={s.text}>Упс, здесь ничего нет!</span>
      <button className={s.button} onClick={handleHomeNavigate}>
        Поиск Вакансий
      </button>
    </div>
  );
}

export default FavEmpty;
