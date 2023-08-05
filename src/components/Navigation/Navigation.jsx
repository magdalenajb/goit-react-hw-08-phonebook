import { NavLink } from 'react-router-dom';
// import c from './Navigation.module.css';
import { useAuth } from 'components/hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className="link" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="link" to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
