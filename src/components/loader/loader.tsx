import { Loader } from '@mantine/core';
import s from './loader.module.scss';

function LoaderComponent() {
  return (
    <div className={s.container}>
      <Loader />
    </div>
  );
}

export default LoaderComponent;
