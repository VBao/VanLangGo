import {
  ActionIcon,
  Badge,
  Button,
  Group,
  Image,
  Modal,
  MultiSelect,
  Select,
  Text,
  TextInput,
  Tooltip,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import moment from 'moment';
import * as React from 'react';
import { BiEditAlt, BiPlus, BiTrash } from 'react-icons/bi';
import { Create } from './Create';
import { Update } from './Update';

export interface ITableCustomProps {
  data: any[];
}

export function TableCustom({ data }: ITableCustomProps) {
  const [stringValue, setStringValue] = React.useState<any>({});
  const [opened, setOpened] = React.useState(false);
  const [model, setModel] = React.useState(false);
  const [createModel, setCreateModel] = React.useState(false);

  const form = useForm({
    initialValues: { name: '' },
    validate: {
      name: (value) =>
        value !== stringValue.name
          ? 'You entered the wrong keyword. Please re-enter keywords!'
          : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values.name);
    setOpened(false);
  };
  return (
    <div className='overflow-x-auto relative tracking-tighter'>
      <div className='flex justify-between items-center'>
        <Group mb={20} className='flex justify-start items-end'>
          <TextInput label='Search' placeholder='Nhập' className='w-72' />
          <Select
            label='Status'
            placeholder='Status'
            searchable
            nothingFound='No options'
            data={[
              { value: 'ACTIVE', label: 'Active' },
              { value: 'INACTIVE', label: 'Inactive' },
              { value: 'DELETED ', label: 'Deleted' },
            ]}
          />
          <MultiSelect
            data={[
              { value: 'react', label: 'React' },
              { value: 'ng', label: 'Angular' },
              { value: 'svelte', label: 'Svelte' },
              { value: 'vue', label: 'Vue' },
              { value: 'riot', label: 'Riot' },
              { value: 'next', label: 'Next.js' },
              { value: 'blitz', label: 'Blitz.js' },
            ]}
            label='Category'
            placeholder='Category'
            className='w-[20rem]'
            maxSelectedValues={3}
          />
          <Button variant='outline'>Search</Button>
        </Group>
        <Button variant='outline' onClick={() => setCreateModel(true)}>
          {' '}
          <BiPlus />
          Add Store
        </Button>
      </div>
      <table className='w-full text-gray-600 text-left '>
        <thead className='border-[1px] text-gray-600'>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Category</th>
            <th>Product</th>
            <th>Create Time</th>
            <th>Update Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr className='border-[1px]' key={index}>
                <td>
                  {item.images.map((item: any, index: any) => (
                    <Image
                      src={item.src}
                      alt={item.name}
                      key={index}
                      radius='md'
                      width={80}
                      height={80}
                    />
                  ))}
                </td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>{item.phone}</td>
                <td>
                  <Tooltip
                    label={
                      <>
                        <Text>lat: {item.location.lat}</Text>
                        <Text>long: {item.location.long}</Text>
                      </>
                    }
                  >
                    <Text>{item.location.address}</Text>
                  </Tooltip>
                </td>
                <td>
                  {item.categories.map((item: any, index: number) => {
                    return (
                      <ul key={index}>
                        <li>{item}</li>
                      </ul>
                    );
                  })}
                </td>
                <td>
                  {item.products.map((item: any, index: number) => {
                    return (
                      <ul key={index}>
                        <li>{item}</li>
                      </ul>
                    );
                  })}
                </td>
                <td>
                  <Tooltip
                    label={
                      <Text>
                        {item.createdBy ? item.createdBy : '--/--'}
                        <br />
                        {item.createdAt
                          ? moment(item.createdAt).format('DD/MM/YYYY h:mm:ss a')
                          : '--/--'}
                      </Text>
                    }
                  >
                    <Text>{moment().format('L')}</Text>
                  </Tooltip>
                </td>

                <td>
                  <Tooltip
                    label={
                      <Text>
                        {item.updatedBy ? item.updatedBy : '--/--'}
                        <br />
                        {item.updatedAt
                          ? moment(item.updatedAt).format('DD/MM/YYYY h:mm:ss a')
                          : '--/--'}
                      </Text>
                    }
                  >
                    <Text>{moment().format('L')}</Text>
                  </Tooltip>
                </td>

                <td>
                  {item.status === 'ACTIVE' ? (
                    <Badge color='green'>Active</Badge>
                  ) : (
                    <Badge color='red'>Not Active</Badge>
                  )}
                </td>
                <td>
                  <ActionIcon
                    variant='light'
                    className='mx-auto'
                    onClick={() => {
                      setModel(true);
                      setStringValue(item);
                    }}
                  >
                    <BiEditAlt size={20} />
                  </ActionIcon>
                  <ActionIcon
                    variant='light'
                    color='red'
                    className='mx-auto'
                    onClick={() => {
                      setOpened(true);
                      setStringValue(item);
                    }}
                  >
                    <BiTrash size={20} />
                  </ActionIcon>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal opened={opened} onClose={() => setOpened(false)} title='DELETE ITEM!'>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Text>
            Are you sure that yout want to delete{' '}
            <Text color='red' weight={600} span>
              "{stringValue.name}"
            </Text>
            ?
          </Text>
          <TextInput label='Name' placeholder='Name' {...form.getInputProps('name')} />

          <Group position='right'>
            <Button type='submit' mt='sm' variant='outline'>
              Submit
            </Button>
          </Group>
        </form>
      </Modal>

      <Create
        createModel={createModel}
        setCreateModel={() => setCreateModel(false)}
        item={stringValue}
      />

      <Update model={model} setModel={() => setModel(false)} item={stringValue} />
    </div>
  );
}
