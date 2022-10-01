import React from 'react';
import { Header } from '~/components/Header';
import { TableCustom } from '~/components/Store';
import { DataStore } from '~/utils/constants';

export function Store() {
  const Data = React.useMemo(() => DataStore, []);

  return (
    <>
      <Header category='Page' title='Orders' />
      <TableCustom data={Data} />
    </>
  );
}
