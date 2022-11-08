import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </>
  );
};

export default Menu;
