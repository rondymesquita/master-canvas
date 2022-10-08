import { useNavigate } from 'react-router-dom';
import useUser from '../../app/usecase/user/useUser';
import Header from '../components/Header';
import useAuthCookie from '../hooks/useAuthCookie';
import { LOGIN_PAGE } from '../route/routes';

export default function HeaderContainer() {
  const { deleteCookie } = useAuthCookie();
  const { user } = useUser();
  const navigate = useNavigate();
  const onActionClick = () => {
    deleteCookie();
    navigate(LOGIN_PAGE);
  };

  return <Header username={user?.name} onActionClick={onActionClick} />;
}
