import { Navigate } from 'react-router-dom';
import useLocalUser from '../../../app/usecase/user/useLocalUser';
import { LOGIN_PAGE } from '../routes';

export default function PrivateRoute({ children, ...rest }: any) {
  const { user, setUser } = useLocalUser();
  return <>{user ? children : <Navigate to={LOGIN_PAGE}></Navigate>}</>;
}
