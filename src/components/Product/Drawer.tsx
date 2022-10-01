import * as React from 'react';

export interface IDrawerProps {
  data: any;
}

export function DrawerPropduct({ data }: IDrawerProps) {
  return (
    <div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}
