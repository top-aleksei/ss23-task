/* eslint-disable @typescript-eslint/no-explicit-any */

import s from './favPaginator.module.scss';

import { Pagination } from '@mantine/core';

function FavPaginator(props: any) {
  const totalPages = Math.ceil(props.items.length / 4);

  return (
    <div className={s.container}>
      <Pagination total={totalPages} value={props.page} onChange={(e) => props.setPage(e)} />
    </div>
  );
}

export default FavPaginator;
