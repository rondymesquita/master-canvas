import { Box, Portal } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef } from 'react';
export const PortalContext = React.createContext({} as any);

export const usePortal = () => useContext(PortalContext);

export function PortalProvider({ children }: any) {
  useEffect(() => {}, []);

  // const transformerRef = useRef(null);
  const portalRef = useRef(null);

  const value = {
    portalRef,
  };

  return (
    <PortalContext.Provider value={value}>
      {/* <Portal containerRef={portalRef}>
        Portal: This text is portaled to the yellow box!
      </Portal> */}
      <Box ref={portalRef} p={2} bg="yellow.500" data-testid={'portal'}></Box>
      <div>{children}</div>
    </PortalContext.Provider>
  );
}
