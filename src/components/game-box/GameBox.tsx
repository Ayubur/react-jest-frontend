import React, { ReactNode, useEffect, useState } from 'react';
import { ContainerStyled } from './styled';
import { TestElement } from '../../enums/TestElement';

interface Props {
  children: ReactNode;
}
export const GameBox = ({ children }: Props) => {
  const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth);
  const [viewPortHeight, setViewPortHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewPortWidth(window.innerWidth);
      setViewPortHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return <ContainerStyled viewPortWidth={viewPortWidth} viewPortHeight={viewPortHeight} data-testid={TestElement.GAME_BOX}>{children}</ContainerStyled>;
};
