import ReactPlayer from 'react-player';
import React, { useState } from 'react';

import { useAsync } from 'react-use';
import { LoadingSpinner } from '../../components/LoadingSpinner';

function YoutubeNewsfeedStream() {
  // const { value, loading, error } = useAsync(async () => {
  //     const response = await fetch(
  //         `http://localhost:8080/youtube/search?part=snippet&maxResults=10&q=covid19%20news`
  //     );
  //     const result = await response.json();
  //     console.log(result[0].id.videoId)
  //     return result;
  // }, []);
  // if (loading || !value) {
  //     return <LoadingSpinner />;
  // }

  return (
    <>
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=r7SO-Oq3d5E"
          controls="true"
        />
      </div>
    </>
  );
}
export { YoutubeNewsfeedStream };
