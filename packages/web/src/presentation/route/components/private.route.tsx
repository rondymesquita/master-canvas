import { Navigate, useNavigate } from 'react-router-dom';
import useUser from '../../../app/usecase/user/useUser';
import useAuthCookie from '../../hooks/useAuthCookie';
import { HOME_PAGE, LOGIN_PAGE } from '../routes';
import { useEffect } from 'react';

export default function PrivateRoute({ children, ...rest }: any) {
  const { user, setUser } = useUser();
  const { cookie } = useAuthCookie();

  const navigate = useNavigate();

  useEffect(() => {
    setUser(cookie);
    navigate(HOME_PAGE);
    // console.log(cookies);
  }, []);

  return <>{user ? children : <Navigate to={LOGIN_PAGE}></Navigate>}</>;
}
