import React from 'react';
import {AiFillCheckCircle} from 'react-icons/ai';
import './css/card.css';
import {Box, Card, CardContent, Typography} from '@mui/material';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {CARD_DATA} from './constants';

export const CardContainer = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const cardAnimations = CARD_DATA.map((_, index) => {
		const cardFrame = frame - index * 10; // Delay between each card
		const translateX = spring({
			// Animation in X direction
			from: -50,
			to: 0,
			frame: cardFrame,
			fps: fps * 3, // speed of the animation
		});

		const opacity = spring({
			// Animation for entry effect
			from: 0,
			to: 1,
			frame: cardFrame - index * 2, // extra delay for drop in effect
			fps: fps * 3, // speed of the animation
		});

		const translateXIcon = spring({
			// Animation in X direction for Icon with different speed
			from: -50,
			to: 0,
			frame: cardFrame,
			fps: fps * 4, // speed of the animation
		});

		const opacityIcon = spring({
			// Animation for entry effect
			from: 0,
			to: 1,
			frame: cardFrame - index * 2, // extra delay for drop in effect
			fps: fps * 4, // speed of the animation
		});

		return {translateX, opacity, translateXIcon, opacityIcon};
	});

	return (
		<Box className="container">
			{CARD_DATA.map((card, index) => (
				<Card
					className="card"
					key={index}
					style={{
						transform: `translateX(${cardAnimations[index].translateX}px)`,
						opacity: cardAnimations[index].opacity,
					}}
				>
					<CardContent className="card-content">
						<AiFillCheckCircle
							className="icon"
							style={{
								transform: `translateX(${cardAnimations[index].translateXIcon}px)`,
								opacity: cardAnimations[index].opacityIcon,
							}}
						/>
						<Typography className="content">{card.content}</Typography>
					</CardContent>
				</Card>
			))}
		</Box>
	);
};
