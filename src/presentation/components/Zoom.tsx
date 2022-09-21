import { DownloadIcon, SettingsIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
// import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { Command, useCommander } from '../contexts/CommanderContext';
import { useZoom, ZoomProvider } from '../contexts/ZoomContext';

function Zoom({ children }: any, ref: any) {
  return (
    <>
      <div>{children}</div>
      {/* <TransformWrapper
        ref={ref}
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
    </>
  );
}

export default forwardRef(Zoom);
