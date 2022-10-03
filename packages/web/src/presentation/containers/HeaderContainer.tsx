import { useEffect } from 'react';
import useUser from '../../app/usecase/user/useUser';
import Header from '../components/Header';
import useAuthCookie from '../hooks/useAuthCookie';

export default function HeaderContainer() {
  const { deleteCookie } = useAuthCookie();
  const { user } = useUser();
  const onActionClick = () => {
    deleteCookie();
  };

  return <Header username={user?.firstName} onActionClick={onActionClick} />;
}
