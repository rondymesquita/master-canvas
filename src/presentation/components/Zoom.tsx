import { DownloadIcon, SettingsIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Command, useCommander } from '../contexts/CommanderContext';
import { useZoom, ZoomProvider } from '../contexts/ZoomContext';

function ZoomInternalComponent({ children }) {
  const { transformerRef } = useZoom();
  return <>{React.cloneElement(children, { transformerRef })}</>;
}
export default function Zoom({ children }) {
  return (
    <ZoomProvider>
      <ZoomInternalComponent>{children}</ZoomInternalComponent>
    </ZoomProvider>
  );
}
