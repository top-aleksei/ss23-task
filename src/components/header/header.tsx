import { NavLink, useNavigate } from 'react-router-dom';
import s from './header.module.scss';

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo} onClick={handleLogoClick}>
          <div className={s.logo__ico} />
          <span>Jobored</span>
        </div>
        <div className={s.menu}>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? s.link__active : s.link;
            }}
          >
            Поиск Вакансий
          </NavLink>
          <NavLink
            to="/favorite"
            className={({ isActive }) => {
              return isActive ? s.link__active : s.link;
            }}
          >
            Избранное
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
