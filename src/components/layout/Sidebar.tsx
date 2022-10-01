import { NavLink } from 'react-router-dom';
import { useStateContext } from '~/contexts/ContextProvider';
import { LinkMenuSide } from '~/utils/constants';
import { Tooltip } from '@mantine/core';

export function Siderbar() {
  const { activeMenu, currentColor } = useStateContext();

  const activeLink = 'flex items-center gap-5 p-4 rounded-lg text-white text-md';
  const normalLink =
    'flex items-center gap-5 p-4 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray';

  return (
    <div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 shadow-2xl'>
      {activeMenu && (
        <>
          <div className='flex justify-center items-center'>
            <div className='mt-10'>
              {LinkMenuSide.map((item) => (
                <Tooltip
                  label={item.name}
                  transition='scale-x'
                  transitionDuration={300}
                  position='right'
                  key={item.name}
                >
                  <NavLink
                    to={`/${item.name}`}
                    key={item.name}
                    style={({ isActive }: any) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }: any) => (isActive ? activeLink : normalLink)}
                  >
                    {item.icon}
                    {!activeMenu && <span className='capitalize '>{item.name}</span>}
                  </NavLink>
                </Tooltip>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
