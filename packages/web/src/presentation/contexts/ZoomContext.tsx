import React, { useContext, useEffect, useRef } from 'react';
// import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
export const ZoomContext = React.createContext({} as any);

export const useZoom = () => useContext(ZoomContext);

export function ZoomProvider({ children }: any) {
  useEffect(() => {}, []);

  const transformerRef = useRef(null);

  const value = {
    transformerRef,
  };

  return (
    <ZoomContext.Provider value={value}>
      <div>{children}</div>
      {/* {children} */}
      {/* <TransformWrapper
        ref={transformerRef}
        initialScale={1}
        minScale={0.1}
        centerOnInit={false}
        limitToBounds={false}
        centerZoomedOut={false}
        panning={{ velocityDisabled: false }}
      >
        <TransformComponent>
          <div>{children}</div>
        </TransformComponent>
      </TransformWrapper> */}
    </ZoomContext.Provider>
  );
}
