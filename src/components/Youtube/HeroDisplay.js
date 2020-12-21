import ReactPlayer from 'react-player';
import React, { useEffect, useState } from 'react';
import { useStyles } from './styles'

import clsx from 'clsx';

const HeroDisplay = (props) => {
  const { activeVideo, activeIndex } = props;
  const [playing, setPlaying] = useState(false);
  const classes = useStyles();
  const url = `https://www.youtube.com/watch?v=${activeVideo.id.videoId}`;

  useEffect(() => {
    activeIndex !== 0 && setPlaying(true)
  }, [activeIndex]);

  return (
    <div className={clsx(classes.videoHero)}>
      <ReactPlayer
        url={url}
        playing={playing}
        controls="true"
        auto
        style={{
          borderRadius: 5,
          overflow: "hidden",
          boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.3)"
        }}
        width={'100%'}
        height={500}
      />
    </div>
  )

}

export default HeroDisplay;
