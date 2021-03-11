import React from 'react';
import YouTube from 'react-youtube';

const Video = () => {
  const vidArr = [
    '9ezzpuOqkX4',
    'pJY0mBWHPw4',
    'fvtrRGmv7aU',
    'ekZZZPRxWtI',
    'FnloKzEAX7o',
    'yWOqeyPIVRo',
    'cSKGa_7XJkg',
  ];
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <div>
      {vidArr.map((item) => (
        <YouTube videoId={item} opts={opts} onReady={onReady} />
      ))}
    </div>
  );
};

export default Video;
