import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchExactVacancy } from '../../service/superjob';
import { IVacancy } from '../../service/models';
import s from './vacancyPage.module.scss';
import VacancyTitle from './vacancyTitle/vacancyTitle';
import VacancyBody from './vacancyBody/vacancyBody';
import Loader from '../loader/loader';

function VacancyPage() {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState<IVacancy | null>(null);
  useEffect(() => {
    const getItem = async () => {
      const item = await fetchExactVacancy(`${id}`);
      setVacancy(item);
    };
    getItem();
  }, []);

  if (vacancy) {
    return (
      <div className={s.container}>
        <VacancyTitle item={vacancy}></VacancyTitle>
        <VacancyBody item={vacancy}></VacancyBody>
      </div>
    );
  } else {
    return <Loader />;
  }
}

export default VacancyPage;
