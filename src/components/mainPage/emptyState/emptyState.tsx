import s from './emptyState.module.scss';

function EmptyState() {
  return (
    <div className={s.page}>
      <div className={s.image}></div>
      <span className={s.text}>Упс, подходящих вакансий нет :(</span>
      <span className={s.text}>Попробуйте изменить параметры поиска</span>
    </div>
  );
}

export default EmptyState;
