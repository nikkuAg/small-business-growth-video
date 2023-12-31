import {Composition} from 'remotion';
import {GrowBuisness} from './GrowBusiness';
import {Title} from './GrowBusiness/title';
import {CardContainer} from './GrowBusiness/cardContainer';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot = () => {
	return (
		<>
			<Composition
				id="GrowBusiness"
				component={GrowBuisness}
				durationInFrames={110}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={90}
				fps={30}
				width={1080}
				height={1920}
				defaultProps={{
					title: 'HOW TO GROW SMALL BUSINESS',
				}}
			/>
			<Composition
				id="Card"
				component={CardContainer}
				durationInFrames={90}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
