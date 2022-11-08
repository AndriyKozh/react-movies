import { Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';

const MainLayaut = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Outlet />
    </div>
  );
};

export default MainLayaut;
