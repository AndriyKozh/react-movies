import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Menu from '../Menu/Menu';

const MainLayaut = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayaut;
