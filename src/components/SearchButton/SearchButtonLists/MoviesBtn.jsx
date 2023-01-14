import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../../context/YoutubeApiContext';
import Status from '../../VideoCard/Status';

export default function Movies() {
  
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos, }
    = useQuery(['videos'], () => youtube.Movies());

  // When the Movies button is clicked, then show the lists of Movies and status.
  return (
    <>
      <Status isLoading={isLoading} error={error} videos={videos} />
    </>
  );
}

