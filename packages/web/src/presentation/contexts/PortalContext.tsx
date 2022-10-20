import { Box, Flex, Portal } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef } from 'react';
export const PortalContext = React.createContext({} as any);

export const usePortal = () => useContext(PortalContext);

export function PortalProvider({ children }: any) {
  const portalRef = useRef(null);

  const value = {
    portalRef,
  };

  return (
    <PortalContext.Provider value={value}>
      <Flex>
        <Flex
          flexShrink={1}
          width={'100%'}
          ref={portalRef}
          p={2}
          bg="yellow.500"
          data-testid={'portal'}
          sx={{
            position: 'absolute',
            zIndex: 1400,
          }}
        >
          {/* <Flex>{children}</Flex> */}
        </Flex>

        <Flex flexShrink={1} width={'100%'}>
          <Flex>{children}</Flex>
        </Flex>
      </Flex>
    </PortalContext.Provider>
  );
}
