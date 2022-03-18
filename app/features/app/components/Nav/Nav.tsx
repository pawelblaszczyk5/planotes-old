import clsx from 'clsx';
import { NavLink } from 'remix';

export const Nav = () => (
  <nav className="flex gap-2">
    <NavLink
      className={({ isActive }) => clsx(isActive && 'text-blue-200')}
      to=""
      end
    >
      Dashboard
    </NavLink>
    <NavLink
      className={({ isActive }) => clsx(isActive && 'text-blue-200')}
      to="planner"
    >
      Planner
    </NavLink>
    <NavLink
      className={({ isActive }) => clsx(isActive && 'text-blue-200')}
      to="notes"
    >
      Notes
    </NavLink>
    <NavLink
      className={({ isActive }) => clsx(isActive && 'text-blue-200')}
      to="goals"
    >
      Goals
    </NavLink>
    <NavLink
      className={({ isActive }) => clsx(isActive && 'text-blue-200')}
      to="tasks"
    >
      Tasks
    </NavLink>
    <NavLink
      className={({ isActive }) => clsx(isActive && 'text-blue-200')}
      to="rewards"
    >
      Rewards
    </NavLink>
  </nav>
);
