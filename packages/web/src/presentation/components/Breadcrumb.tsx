import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  BreadcrumbItem,
  BreadcrumbLink as CharkaBreadcrumbLink,
  Breadcrumb as ChakraBreadcrumb,
  Icon,
  Center,
  Text,
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { BreadcrumbLinkModel } from '../../domain/breadcrumblink';

export default function Breadcrumb({
  links = [],
}: {
  links: Array<BreadcrumbLinkModel>;
}) {
  return (
    <>
      <ChakraBreadcrumb
        spacing="8px"
        fontSize={'lg'}
        separator={<ChevronRightIcon color="gray.500" />}
      >
        {links.map((link: BreadcrumbLinkModel) => (
          <BreadcrumbItem key={link.href}>
            <CharkaBreadcrumbLink href={`${link.href}`}>
              <Center>
                <Icon as={link.icon ? link.icon : FaHome} />
                <Text pl={2}>{link.title}</Text>
              </Center>
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
