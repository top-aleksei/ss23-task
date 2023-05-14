import React, { useEffect, useState } from 'react';
import s from './App.module.scss';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorite from './components/favorite/favorite';
import MainPage from './components/mainPage/mainPage';
import { MantineProvider } from '@mantine/core';
import { fetchCatalog } from './service/superjob';
import { ICatalog } from './service/models';

function App() {
  const [catalog, setCatalog] = useState<ICatalog[]>([]);
  useEffect(() => {
    const getCatalog = async () => {
      const data = await fetchCatalog();
      setCatalog(data);
    };
    getCatalog();
  }, []);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <div className={s.App}>
          <Header></Header>
          <div className={s.App__main}>
            <Routes>
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
