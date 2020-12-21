import ReactPlayer from 'react-player';
import React, { useState } from 'react';
import clsx from 'clsx';
import { useStyles } from './styles';

import Timestamp from "./Timestamp";

const VideoEntry = ({ video, index, activeIndex, setIndex }) => {
  const classes = useStyles();

  const { publishedAt, channelId, title, description, thumbnails, channelTitle, publishTime } = video.snippet;
  const url = `https://www.youtube.com/watch?v=${video.id.videoId}`;
  const previewThumbnail = thumbnails.medium.url;

  return (
    <div className={clsx(classes.videoEntry, activeIndex == index && classes.videoEntryActive)} onClick={() => setIndex(index)}>
      <img src={previewThumbnail} className={clsx(classes.thumbnail)} />
      <div className={clsx(classes.metadata)}>
        <p className={clsx(classes.channel)}>{channelTitle}</p>
        <h3 className={clsx(classes.videoTitle)}>{title}</h3>
        <h4 className={clsx(classes.description)}>{description}</h4>
        <Timestamp date={publishedAt} />
      </div>
    </div>
  )
}


export default VideoEntry;