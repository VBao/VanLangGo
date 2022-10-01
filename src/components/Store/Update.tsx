import {
  Button,
  Code,
  Drawer,
  Group,
  MultiSelect,
  Select,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import * as React from 'react';
import { Store } from '~/models';

export interface IAddStoreProps {
  model: boolean;
  setModel: () => void;
  item: any;
}

export function Update({ item, model, setModel }: IAddStoreProps) {
  const [markers, setMarkers] = React.useState([]);

  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      description: '',
      category: '',
      status: '',
    },

    validate: {},
  });

  React.useEffect(() => {
    form.setValues({
      name: `${item.name}`,
      phone: `${item.phone}`,
      description: `${item.desc}`,
      category: `${item.categories}`,
      status: `${item.status}`,
    } as Store);
  }, [model]);

  const data = [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
    { value: 'riot', label: 'Riot' },
    { value: 'next', label: 'Next.js' },
    { value: 'blitz', label: 'Blitz.js' },
  ];

  const {} = useLoadScript({
    googleMapsApiKey: 'AIzaSyD35sBMy9kQ7J1a80FhmLLlWMhuskyem40',
    libraries: ['places'],
  } as {
    googleMapsApiKey: string;
  });
  const mapContainerStyle = {
    width: '47vw',
    height: '50vh',
  };

  const center = {
    lat: 10.827927315667582,
    lng: 106.70028476137132,
  };

  const onMapClick = React.useCallback((e: any) => {
    setMarkers((current): any => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map: any) => {
    mapRef.current = map;
  }, []);
  const panTo = React.useCallback(() => {
    // mapRef.current.panTo({ lat, lng });
    // mapRef.current.setZoom(14);
  }, []);

  return (
    <Drawer
      opened={model}
      onClose={setModel}
      title='Create Store'
      padding='xl'
      size='50%'
      position='right'
    >
      {/* <Code block mt={5}>
        {JSON.stringify(form.values, null, 2)}
      </Code> */}

      <form>
        <Stack spacing='xs'>
          <Group grow>
            <TextInput
              label='Name'
              placeholder='Name'
              withAsterisk
              value={item.name}
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
          {/* <Search panTo={panTo} /> */}
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={13}
            onClick={onMapClick}
            onLoad={onMapLoad}
          ></GoogleMap>

          <MultiSelect
            data={data}
            label='Category'
            placeholder='Category'
            {...form.getInputProps('category', { type: 'checkbox' })}
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
            <Button color='red' variant='outline' onClick={setModel}>
              Close
            </Button>
            <Button color='blue' variant='outline'>
              Save
            </Button>
          </Group>
        </Stack>
      </form>
    </Drawer>
  );
}

// function Search({ panTo }: any) {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 10.827927315667582, lng: () => 106.70028476137132 },
//       radius: 100 * 1000,
//     },
//   });

//   const handleSelect = async (address: any) => {
//     setValue(address, false);
//     clearSuggestions();

//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       panTo({ lat, lng });
//     } catch (error) {
//       console.log('😱 Error: ', error);
//     }
//   };

//   return (
//     <div className='search'>
//       <Box onSelect={handleSelect}>
//         <TextInput
//           value={value}
//           onChange={() => setValue(e.target.value)}
//           disabled={!ready}
//           placeholder='Search your location'
//         />
//         {/* <Popover>
//           <List>
//             {status === 'OK' &&
//               data.map(({ id, description }: any) => (
//                 <List.Item key={id} value={description}>
//                   {description}
//                 </List.Item>
//               ))}
//           </List>
//         </Popover> */}
//       </Box>
//     </div>
//   );
// }
