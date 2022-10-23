import { Box, Container, Flex, Portal } from '@chakra-ui/react';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
export const PortalContext = React.createContext({} as any);

export const usePortal = () => useContext(PortalContext);

export function PortalProvider({ children }: any) {
  const portalLeftRef = useRef(null);
  const [portalLeftVisible, setPortalLeftVisible] = useState(false);
  const portalRightRef = useRef(null);
  const [portalRightVisible, setPortalRightVisible] = useState(false);
  const contentRef = useRef(null);

  const value = {
    portalLeftRef,
    setPortalLeftVisible,
    portalRightRef,
    setPortalRightVisible,
    contentRef,
  };

  const isAnyPortalVisible = useMemo(() => {
    return portalLeftVisible || portalRightVisible || false;
  }, [portalLeftVisible, portalRightVisible]);

  useEffect(() => {
    if (portalLeftVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isAnyPortalVisible]);

  return (
    <PortalContext.Provider value={value}>
      <Flex
        data-testid="portal-provider"
        flexDirection={
          portalRightVisible && !portalLeftVisible ? 'row-reverse' : 'row'
        }
      >
        <Flex
          data-testid="portal-content"
          bg="red.500"
          height={'100vh'}
          // width="full"
          width={portalRightVisible && !portalLeftVisible ? '50%' : '100%'}
          sx={{
            position: 'fixed',
            zIndex: isAnyPortalVisible ? 1400 : -1,
            // zIndex: 1400,
          }}
          justifyContent={'center'}
        >
          <Flex
            // hidden={!portalLeftVisible}
            bg="yellow.500"
            // flexGrow={1}
            width={'100%'}
            ref={portalLeftRef}
            data-testid={'portal-left'}
            sx={{
              display: portalLeftVisible ? 'block' : 'none',
              // position: 'relative',
              // zIndex: 1400,
            }}
          ></Flex>
          <Flex
            // hidden={!portalRightVisible}
            bg="green.400"
            flexShrink={1}
            width={'100%'}
            ref={portalRightRef}
            data-testid={'portal-right'}
            sx={{
              display: portalRightVisible ? 'block' : 'none',
              // position: 'fixed',
              // zIndex: 1400,
            }}
          ></Flex>
        </Flex>

        <Flex flexShrink={1} width={'100%'} ref={contentRef} overflow="auto">
          {children}
        </Flex>
      </Flex>
    </PortalContext.Provider>
  );
}
