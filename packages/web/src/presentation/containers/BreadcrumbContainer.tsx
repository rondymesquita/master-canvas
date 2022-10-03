import Breadcrumb, { BreadcrumbLinkType } from '../components/Breadcrumb';
import { HOME_PAGE } from '../route/routes';

export default function BreadcrumbContainer() {
  const links: Array<BreadcrumbLinkType> = [
    {
      href: HOME_PAGE,
      title: 'Inicio',
    },
  ];
  return (
    <div>
      <Breadcrumb links={links} />
    </div>
  );
}
