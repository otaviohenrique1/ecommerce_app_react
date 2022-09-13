import React, { ReactNode } from 'react';
import Appbar from './AppBar';

interface ContainerAppProps {
  children: ReactNode;
}

export default function ContainerApp(props: ContainerAppProps) {
  return (
    <>
      <Appbar />
      {props.children}
    </>
  )
}
