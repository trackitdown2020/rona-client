import ReactPlayer from 'react-player';
import React, { useState, useEffect } from 'react';
import { YOUTUBE_STATIC } from '../../components/Youtube/static.js';
import clsx from 'clsx';
import { useStyles } from '../../components/Youtube/styles';

import HeroDisplay from '../../components/Youtube/HeroDisplay';
import VideoList from '../../components/Youtube/VideoList';

import { useAsync } from 'react-use';
import { LoadingSpinner } from '../../components/LoadingSpinner';

const YoutubeNewsfeedStream = () => {
  const classes = useStyles();
  const [videos, setVideos] = useState(YOUTUBE_STATIC.items);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => fetchVideos(), []);

  const fetchVideos = () => {
    // setVideos(;
    // console.log('videos', videos[0])
    // const { value, loading, error } = useAsync(async () => {
    // const response = await fetch(
    //     `http://localhost:8080/youtube/search?part=snippet&maxResults=10&q=covid19%20news`
    // );
    // const result = await response.json();
    // return setVideos(result);
    // }, []);
  };

  const videoHeroProps = () => ({
    activeVideo: videos[activeIndex],
    activeIndex
  });

  const videoListProps = () => ({
    videos,
    activeIndex,
    setActiveIndex
  });

  return (
    <div className={clsx(classes.root)}>
      <h1 className={clsx(classes.header)}>Newsfeed Stream</h1>
      <HeroDisplay {...videoHeroProps()} />
      <VideoList {...videoListProps()} />
    </div>
  );
};
// function YoutubeNewsfeedStream() {

// if (loading || !value) {
//     return <LoadingSpinner />;
// }

//   return (
//     <>
//       <div>
//         <ReactPlayer
//           url="https://www.youtube.com/watch?v=r7SO-Oq3d5E"
//           controls="true"
//         />
//       </div>
//     </>
//   );
// }

export { YoutubeNewsfeedStream };
