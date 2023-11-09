import backgroundVideo from './assets/background.mp4';
import {Video} from 'remotion';

export const Background = () => {
	return (
		<div style={{height: '100%'}}>
			<Video height={`${100}%`} src={backgroundVideo} />
		</div>
	);
};
