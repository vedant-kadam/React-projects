import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/store";
const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const authDispatch = useDispatch();
  const logoutUser = () => {
    authDispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuth && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutUser}> Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
