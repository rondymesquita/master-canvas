import { useNavigate } from 'react-router-dom';
import useUser from '../../app/usecase/user/useUser';
import Header from '../components/Header';
import useAuthCookie from '../hooks/useAuthCookie';
import { LOGIN_PAGE } from '../route/routes';

export default function HeaderContainer() {
  const { deleteCookie } = useAuthCookie();
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const onActionClick = () => {
    deleteCookie();
    setUser(null);
    navigate(LOGIN_PAGE);
  };

  return <Header user={user} onActionClick={onActionClick} />;
}
