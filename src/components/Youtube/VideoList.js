import ReactPlayer from 'react-player';
import React, { useState } from 'react';
import clsx from 'clsx';
import { useStyles } from './styles'

import VideoEntry from "./VideoEntry";


const VideoList = (props) => {
  const { videos, activeIndex, setActiveIndex } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.videoList)}>
      {videos.map((video, i) => (
        <VideoEntry 
          key={video.id.videoId} 
          index={i} 
          activeIndex={activeIndex}
          setIndex={setActiveIndex} 
          video={video} 
        />
      ) )}
    </div>
  )
}

export default VideoList;