import * as React from 'react';

export interface IHeaderProps {
  category: string;
  title: string;
}

export function Header({ category, title }: IHeaderProps) {
  return (
    <div className=' mb-10'>
      <p className='text-lg text-gray-400'>{category}</p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900'>{title}</p>
    </div>
  );
}
