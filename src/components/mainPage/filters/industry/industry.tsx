import { Select } from '@mantine/core';
import { ChevronDown, ChevronUp } from 'tabler-icons-react';
import s from './industry.module.scss';
import { ICatalog } from '../../../../service/models';
import { useAppContext } from '../../../../reducer/filtersContext';

import { updateIndustry } from '../../../../reducer/actions';
import { useState } from 'react';

function IndustryBlock(props: { catalog: ICatalog[] }) {
  const { state, dispatch } = useAppContext();
  const selectData = props.catalog.map((el) => ({
    value: String(el.key),
    label: el.title_rus,
  }));
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className={s.industry}>
      <span className={s.title}>Отрасль</span>
      <Select
        rightSection={
          isOpened ? (
            <ChevronUp size="1.5rem" color="rgb(94, 150, 252)" />
          ) : (
            <ChevronDown size="1.5rem" color="rgb(172, 173, 185)" />
          )
        }
        data={selectData}
        placeholder="Выберите отрасль"
        classNames={{ input: s.input, rightSection: s.rightSec, item: s.item }}
        onChange={(e) => dispatch(updateIndustry(e || ''))}
        onDropdownOpen={() => setIsOpened(true)}
        onDropdownClose={() => setIsOpened(false)}
        value={state.filtersState.industry}
        data-elem="industry-select"
      />
    </div>
  );
}

export default IndustryBlock;
