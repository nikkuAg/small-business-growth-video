import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {Background} from './background';
import {Title} from './title';
import {CardContainer} from './cardContainer';

export const GrowBuisness = () => {
	return (
		<AbsoluteFill>
			<AbsoluteFill>
				<AbsoluteFill>
					<Background />
				</AbsoluteFill>
				<Sequence
					from={0}
					style={{
						justifyContent: 'center',
						margin: '4rem',
						width: 'auto',
						height: 'auto',
					}}
				>
					<Title title="HOW TO GROW SMALL BUSINESS" />
				</Sequence>
				<Sequence
					from={20}
					style={{margin: '4rem', width: 'auto', height: 'auto'}}
				>
					<CardContainer />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
