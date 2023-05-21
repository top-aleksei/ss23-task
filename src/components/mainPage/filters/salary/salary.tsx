import { NumberInput } from '@mantine/core';
import { useAppContext } from '../../../../reducer/filtersContext';
import s from './salary.module.scss';
import { updateSalaryFrom, updateSalaryTo } from '../../../../reducer/actions';

function SalaryBlock() {
  const { state, dispatch } = useAppContext();

  const customInputClass = {
    input: s.custom__input,
    controlUp: s.custom__up,
    controlDown: s.custom__down,
    rightSection: s.custom__rightSection,
  };

  const handleInput = (
    e: React.FormEvent<HTMLInputElement>,
    dispatchFunction: (value: number) => void
  ) => {
    const val = +(e.target as HTMLInputElement).value;
    if (!isNaN(val)) {
      dispatch(dispatchFunction(val));
    }
  };

  const handleChange = (e: number | '', dispatchFunction: (value: number) => void) => {
    if (!isNaN(+e)) {
      dispatch(dispatchFunction(+e));
    }
  };

  return (
    <div className={s.salary}>
      <span className={s.title}>Оклад</span>
      <NumberInput
        classNames={customInputClass}
        placeholder="От"
        value={state.filtersState.salaryFrom}
        min={0}
        onInput={(e) => handleInput(e, updateSalaryFrom)}
        onChange={(e) => handleChange(e, updateSalaryFrom)}
      />
      <NumberInput
        classNames={customInputClass}
        placeholder="До"
        value={state.filtersState.salaryTo}
        min={0}
        onInput={(e) => handleInput(e, updateSalaryTo)}
        onChange={(e) => handleChange(e, updateSalaryTo)}
      />
    </div>
  );
}

export default SalaryBlock;
