import React from 'react'
import { AbsoluteFill, Sequence } from 'remotion'
import { Background } from './background';
import { Title } from './title';


export const GrowBuisness = () => {
  
  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <Background />
      </AbsoluteFill>
      <AbsoluteFill>
      <Sequence from={0}  style={{justifyContent: "center"}}>
        <Title title="HOW TO GROW SMALL BUSINESS" />
      </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
