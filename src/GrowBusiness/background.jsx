// import React, { useCallback, useEffect, useRef } from 'react'
// import { AbsoluteFill, Sequence, Video, useVideoConfig } from 'remotion'

// export const Background = () => {
//   const video = useRef<HTMLVideoElement>(null);
//   const canvas = useRef<HTMLCanvasElement>(null);
//   const { width, height } = useVideoConfig();

//   // Process a frame
//   const onVideoFrame = useCallback(() => {
//     if (!canvas.current || !video.current) {
//       return;
//     }
//     const context = canvas.current.getContext("2d");

//     if (!context) {
//       return;
//     }

//     context.filter = "blur(3px) grayscale(100%)"
//     context.filter
//     context.drawImage(video.current, 0, 0, width, height);
//   }, [height, width]);

//   // Synchronize the video with the canvas
//   useEffect(() => {
//     const { current } = video;
//     if (!current?.requestVideoFrameCallback) {
//       return;
//     }

//     let handle = 0;
//     const callback = () => {
//       onVideoFrame();
//       handle = current.requestVideoFrameCallback(callback);
//     };

//     callback();

//     return () => {
//       current.cancelVideoFrameCallback(handle);
//     };
//   }, [onVideoFrame]);

//   return (
//     <AbsoluteFill>
//       <AbsoluteFill>
//         <Video
//           ref={video}
//           startFrom={2280}
//           muted={true}
//           src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
//         />
//       </AbsoluteFill>
//       <AbsoluteFill>
//         <canvas ref={canvas} width={width} height={height} />
//       </AbsoluteFill>
//     </AbsoluteFill>
//   );
// };

import yourBackgroundVideo from './assets/background4.mp4';
import {Video} from 'remotion';

export const Background = () => {
	return (
		<div>
			<Video src={yourBackgroundVideo} />
		</div>
	);
};
