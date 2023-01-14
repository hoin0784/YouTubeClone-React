import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../../context/YoutubeApiContext';
import Status from '../../VideoCard/Status';

export default function GameBtn() {

  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos, }
    = useQuery(['videos'], () => youtube.Games());

  // When the Game button is clicked, then show the lists of Game and status.  
  return (
    <>
      <Status isLoading={isLoading} error={error} videos={videos} />
    </>
  );
}
