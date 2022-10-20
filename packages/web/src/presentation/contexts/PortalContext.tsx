import { Box, Container, Flex, Portal } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef } from 'react';
export const PortalContext = React.createContext({} as any);

export const usePortal = () => useContext(PortalContext);

export function PortalProvider({ children }: any) {
  const portalRef = useRef(null);
  const portalRightRef = useRef(null);

  const value = {
    portalRef,
    portalRightRef,
  };

  return (
    <PortalContext.Provider value={value}>
      <Flex data-testid="portal-provider">
        <Flex
          data-testid="portal-content"
          // bg="red.500"
          // p={2}
          width="full"
          sx={{
            position: 'absolute',
            zIndex: 1400,
          }}
        >
          <Flex
            // bg="yellow.500"
            // p={2}
            flexShrink={1}
            width={'100%'}
            // flexGrow={2}
            ref={portalRef}
            data-testid={'portal-left'}
            sx={{
              position: 'relative',
              zIndex: 1400,
            }}
          ></Flex>
          <Flex
            bg="primary.500"
            // position={'fixed'}
            // right={0}
            p={2}
            flexShrink={1}
            // width={'100%'}
            width={'fit-content'}
            ref={portalRightRef}
            data-testid={'portal-right'}
            // flexDirection={'revert'}
            justifyContent={'end'}
            sx={{
              // position: 'relative',
              zIndex: 1400,
            }}
          ></Flex>
        </Flex>

        <Flex flexShrink={1} width={'100%'}>
          {children}
        </Flex>
      </Flex>
    </PortalContext.Provider>
  );
}
