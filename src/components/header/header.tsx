import { Link } from 'react-router-dom';
import s from './header.module.scss';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <div className={s.logo__ico} />
          <span>Jobored</span>
        </div>
        <div className={s.menu}>
          <Link to="/">Поиск вакансий</Link>
          <Link to="/favorite">Избранное</Link>
          {/* <span>Поиск вакансий</span>
          <span>Избранное</span> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
