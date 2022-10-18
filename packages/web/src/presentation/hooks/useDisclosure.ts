import { useDisclosure as useDisclosureChakra } from '@chakra-ui/react';

export default function useDisclosure() {
  const { isOpen, onOpen, onClose } = useDisclosureChakra();
  return [isOpen, onOpen, onClose] as [boolean, Function, () => void];
}
