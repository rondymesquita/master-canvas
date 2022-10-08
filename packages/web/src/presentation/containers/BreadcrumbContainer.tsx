import { FaHome } from 'react-icons/fa';
import { BreadcrumbLinkModel } from '../../domain/breadcrumblink';
import Breadcrumb from '../components/Breadcrumb';
import { HOME_PAGE } from '../route/routes';

export default function BreadcrumbContainer() {
  const links: Array<BreadcrumbLinkModel> = [
    {
      href: HOME_PAGE,
      title: 'Inicio',
      icon: FaHome,
    },
  ];
  return (
    <div>
      <Breadcrumb links={links} />
    </div>
  );
}
