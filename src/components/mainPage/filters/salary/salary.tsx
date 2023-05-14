import { NumberInput } from '@mantine/core';
import { useAppContext } from '../../../../reducer/filtersContext';
import s from './salary.module.scss';
import { updateSalaryFrom, updateSalaryTo } from '../../../../reducer/actions';

function SalaryBlock() {
  const { state, dispatch } = useAppContext();

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
      <span>Оклад</span>
      <NumberInput
        styles={{ control: { border: 'none', height: '3px' }, input: { height: '42px' } }}
        placeholder="От"
        value={state.salaryFrom}
        min={0}
        onInput={(e) => handleInput(e, updateSalaryFrom)}
        onChange={(e) => handleChange(e, updateSalaryFrom)}
      />
      <NumberInput
        styles={{ control: { border: 'none', height: '3px' }, input: { height: '42px' } }}
        placeholder="До"
        value={state.salaryTo}
        min={0}
        onInput={(e) => handleInput(e, updateSalaryTo)}
        onChange={(e) => handleChange(e, updateSalaryTo)}
      />
    </div>
  );
}

export default SalaryBlock;
