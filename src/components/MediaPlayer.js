import React from 'react';

const MediaPlayer = ({ url }) => {
  return (
    <div>
      <audio controls>
        <source src={url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MediaPlayer;
