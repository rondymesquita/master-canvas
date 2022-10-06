import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useUser from '../../../app/usecase/user/useUser';
import useAuthCookie from '../../hooks/useAuthCookie';
import { HOME_PAGE, LOGIN_PAGE } from '../routes';
import { useEffect } from 'react';

export default function ({ children, ...rest }: any) {
  const { user } = useUser();

  const location = useLocation();

  if (!user && location.pathname !== LOGIN_PAGE) {
    return (
      <>
        <Navigate to={LOGIN_PAGE} />
      </>
    );
  } else if (user && location.pathname === LOGIN_PAGE) {
    return (
      <>
        <Navigate to={HOME_PAGE} />
      </>
    );
  } else if (!user && location.pathname === LOGIN_PAGE) {
    return <>{children}</>;
  }
  return <></>;

  // return <>{user ? <Navigate to={HOME_PAGE}/> : <Navigate to={LOGIN_PAGE}/>}</>;
}
