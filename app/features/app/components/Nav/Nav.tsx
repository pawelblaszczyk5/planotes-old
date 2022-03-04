import clsx from 'clsx';
import { NavLink } from 'remix';

export const Nav = () => (
  <nav>
    <NavLink className={({ isActive }) => clsx(isActive && 'text-blue-200')} to="">
      Test
    </NavLink>
  </nav>
);
