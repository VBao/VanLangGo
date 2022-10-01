import {
  Button,
  Drawer,
  Group,
  MultiSelect,
  Select,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';

export interface IAddStoreProps {
  createModel: boolean;
  setCreateModel: () => void;
  item: any;
}

export function Create({ createModel, setCreateModel }: IAddStoreProps) {
  const form = useForm({
    initialValues: { name: '', phone: '', description: '', Category: '', status: '' },

    validate: {},
  });

  const data = [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
    { value: 'riot', label: 'Riot' },
    { value: 'next', label: 'Next.js' },
    { value: 'blitz', label: 'Blitz.js' },
  ];

  return (
    <Drawer
      opened={createModel}
      onClose={setCreateModel}
      title='Create Store'
      padding='xl'
      size='50%'
      position='right'
    >
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Stack spacing='xs'>
          <Group grow>
            <TextInput
              label='Name'
              placeholder='Name'
              withAsterisk
              {...form.getInputProps('name')}
            />
            <TextInput
              label='phone'
              placeholder='phone'
              withAsterisk
              {...form.getInputProps('phone')}
            />
          </Group>
          <Textarea
            placeholder='Description'
            label='Description'
            withAsterisk
            {...form.getInputProps('description')}
          />

          <MultiSelect
            data={data}
            label='Category'
            placeholder='Category'
            maxDropdownHeight={150}
          />
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
            {...form.getInputProps('status')}
          />
          <Group position='right'>
            <Button color='red' variant='outline' onClick={setCreateModel}>
              Close
            </Button>
            <Button type='submit' color='blue' variant='outline'>
              Save
            </Button>
          </Group>
        </Stack>
      </form>
    </Drawer>
  );
}
