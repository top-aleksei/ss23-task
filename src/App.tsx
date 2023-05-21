import React, { useEffect, useState } from 'react';
import s from './App.module.scss';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorite from './components/favorite/favorite';
import MainPage from './components/mainPage/mainPage';
import { MantineProvider } from '@mantine/core';
import { fetchCatalog, fetchVacancies } from './service/superjob';
import { ICatalog } from './service/models';
import VacancyPage from './components/vacancyPage/vacancyPage';
import { getFavoriteVacanciesLS, setFavoriteVacanciesLS } from './localStorage/localStorage';
import { useAppContext } from './reducer/filtersContext';
import { addToFavorite, setFetchActivity, updateVacancies } from './reducer/actions';
import { checkToken } from './utils/checkAcess';

function App() {
  const { state, dispatch } = useAppContext();
  const [catalog, setCatalog] = useState<ICatalog[]>([]);

  const getCatalog = async () => {
    const data = await fetchCatalog();
    setCatalog(data);
  };

  const getVacancies = async () => {
    const data = await fetchVacancies(state.filtersState);
    dispatch(updateVacancies(data));
    dispatch(setFetchActivity(false));
  };

  const getFavoriteVacancies = () => {
    const items = getFavoriteVacanciesLS();
    if (items) {
      dispatch(addToFavorite(items));
    }
  };

  useEffect(() => {
    checkToken().then(() => {
      getVacancies();
    });
    getFavoriteVacancies();
    getCatalog();
  }, []);

  useEffect(() => {
    setFavoriteVacanciesLS(state.favoriteState);
  }, [state.favoriteState]);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <div className={s.App}>
          <Header></Header>
          <div className={s.App__main}>
            <Routes>
              <Route path="/vacancy/:id" element={<VacancyPage />}></Route>
              <Route path="/" element={<MainPage catalog={catalog} />}></Route>
              <Route path="favorite" element={<Favorite />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
