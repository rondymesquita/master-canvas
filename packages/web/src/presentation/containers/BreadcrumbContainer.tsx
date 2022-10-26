import { FaHome } from 'react-icons/fa';
import { BreadcrumbLinkModel } from '../../domain/model/breadcrumblink';
import Breadcrumb from '../components/Breadcrumb';
import { useBreadcrumbContext } from '../contexts/BreadcrumbContext';
import { HOME_PAGE } from '../route/routes';

export default function BreadcrumbContainer() {
  // const links: Array<BreadcrumbLinkModel> = [
  //   {
  //     href: HOME_PAGE,
  //     title: 'Início',
  //     icon: FaHome,
  //   },
  // ];

  const { breadcrumbs } = useBreadcrumbContext();
  return (
    <div>
      <Breadcrumb links={breadcrumbs} />
    </div>
  );
}
