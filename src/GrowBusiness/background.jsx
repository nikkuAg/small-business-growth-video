import backgroundVideo from './assets/background.mp4';
import {Video} from 'remotion';

export const Background = () => {
	return (
		<div>
			<Video src={backgroundVideo} />
		</div>
	);
};
