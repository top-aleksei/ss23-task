import { Select } from '@mantine/core';
import { ChevronDown } from 'tabler-icons-react';
import s from './industry.module.scss';
import { ICatalog } from '../../../../service/models';
import { useAppContext } from '../../../../reducer/filtersContext';

import { updateIndustry } from '../../../../reducer/actions';

function IndustryBlock(props: { catalog: ICatalog[] }) {
  const { state, dispatch } = useAppContext();
  const selectData = props.catalog.map((el) => ({
    value: String(el.key),
    label: el.title_rus,
  }));

  return (
    <div className={s.industry}>
      <span>Отрасль</span>
      <Select
        rightSection={<ChevronDown size="1rem" />}
        data={selectData}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        onChange={(e) => dispatch(updateIndustry(e || ''))}
        value={state.industry}
      />
    </div>
  );
}

export default IndustryBlock;
