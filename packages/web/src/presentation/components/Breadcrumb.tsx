import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  BreadcrumbItem,
  BreadcrumbLink as CharkaBreadcrumbLink,
  Breadcrumb as ChakraBreadcrumb,
} from '@chakra-ui/react';
import { BreadcrumbLink } from '../../domain/breadcrumblink';

export default function Breadcrumb({
  links = [],
}: {
  links: Array<BreadcrumbLink>;
}) {
  return (
    <>
      <ChakraBreadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        {links.map((link: BreadcrumbLink) => (
          <BreadcrumbItem key={link.href}>
            <CharkaBreadcrumbLink href={link.href}>
              {link.title}
            </CharkaBreadcrumbLink>
          </BreadcrumbItem>
        ))}

        {/* <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Contact</BreadcrumbLink>
        </BreadcrumbItem> */}
      </ChakraBreadcrumb>
    </>
  );
}
