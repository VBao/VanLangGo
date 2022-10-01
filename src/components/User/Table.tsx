import * as React from 'react';
import { Badge, ActionIcon, Avatar, Drawer, ScrollArea } from '@mantine/core';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { openConfirmModal } from '@mantine/modals';
import moment from 'moment';

export interface ITableProps {
  data: any[];
}

const openDeleteModal = () =>
  openConfirmModal({
    title: 'Xóa Item',
    centered: true,
    children: <p>Bạn có chắc muốn xóa không!</p>,
    labels: { confirm: 'Xóa', cancel: 'Hủy xóa' },
    confirmProps: { color: 'red', variant: 'outline' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => alert('Bạn đã xóa thành công'),
  });

export function Table({ data }: ITableProps) {
  const [opened, setOpened] = React.useState(false);
  const [item, setItem] = React.useState({});

  console.log(moment.locale());

  const rows = data.map((e, i) => (
    <tr
      key={i}
      className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
    >
      <td className='w-4 pl-4'>{i}</td>
      <td className='w-8 pl-4'>
        <Avatar size='lg' src={e.avatar.src} alt={e.avatar.name} />
      </td>
      <td className='py-4 px-6 list-none'>
        <li className='font-bold text-blue-700'>{e.userName}</li>
        <li className='font-bold text-gray-400'>{e.phone}</li>
        <li>{e.email}</li>
      </td>
      <td className='py-4 px-6'>{e.role}</td>
      <td className='py-4 px-6'>{e.gender}</td>
      <td className='py-4 px-6'>
        {e.status === 'ACTIVE' ? (
          <Badge color='green'>Hoạt động</Badge>
        ) : (
          <Badge color='red'>Ngừng hoạt động</Badge>
        )}
      </td>
      <td className='py-4 px-6'>{moment(e.createdAt).format('MMMM Do YYYY')}</td>
      <td>
        <ActionIcon
          variant='light'
          color='green'
          onClick={() => {
            setOpened(true);
            setItem(e);
          }}
        >
          <BiEdit size={22} />
        </ActionIcon>
        <ActionIcon variant='light' color='red' onClick={openDeleteModal}>
          <BiTrash size={22} />
        </ActionIcon>
      </td>
    </tr>
  ));

  return (
    <>
      <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th className='w-4 pl-4'>#</th>
              <th className='w-8 pl-4'></th>
              <th className='py-3 px-6'>Thông tin </th>
              <th className='py-3 px-6'>Quyền</th>
              <th className='py-3 px-6'>Giới tính</th>
              <th className='py-3 px-6'>Trạng thái</th>
              <th className='py-3 px-6'>Tạo ngày</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding='xl'
        size={800}
        position='right'
      >
        <ScrollArea>
          <pre>
            <code>{JSON.stringify(item, null, 2)}</code>
          </pre>
        </ScrollArea>
      </Drawer>
    </>
  );
}
