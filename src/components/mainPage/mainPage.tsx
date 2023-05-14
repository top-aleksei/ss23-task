import { ICatalog } from '../../service/models';
import Filters from './filters/filters';
import s from './mainPage.module.scss';
import SearchBar from './searchBar/searchBar';
import SearchResults from './searhResults/searchResults';

function MainPage(props: { catalog: ICatalog[] }) {
  return (
    <div className={s.page}>
      <Filters catalog={props.catalog} />
      {/* <div className={s.filters}>filters</div> */}
      <div className={s.main}>
        <SearchBar />
        <SearchResults />
        sd
        {/* <div className={s.vacancies}>vasc</div> */}
      </div>
    </div>
  );
}

export default MainPage;
