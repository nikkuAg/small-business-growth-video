import React from 'react';
import {useCurrentFrame, useVideoConfig, spring} from 'remotion';
import './css/title.css';

export const Title = ({title}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const words = title.split(' ');

	const wordAnimations = words.map((_, index) => {
		const wordFrame = frame - index * 3; // Delay between words
		const translateY = spring({
			from: -50,
			to: 0,
			frame: wordFrame,
			fps,
		});

		const opacity = spring({
			from: 0,
			to: 1,
			frame: wordFrame - index * 2,
			fps,
		});

		return {translateY, opacity};
	});

	return (
		<div className="title">
			{words.map((word, index) => (
				<div
					key={index}
					className="word"
					style={{
						transform: `translateY(${wordAnimations[index].translateY}px)`,
						opacity: wordAnimations[index].opacity,
					}}
				>
					{word}
				</div>
			))}
		</div>
	);
};
