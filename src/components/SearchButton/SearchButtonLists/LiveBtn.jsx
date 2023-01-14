import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../../context/YoutubeApiContext';
import Status from '../../VideoCard/Status';

export default function LiveBtn() {

  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos, }
    = useQuery(['videos'], () => youtube.Live());

  // When the Live button is clicked, then show the lists of Live and status.
  return (
    <>
      <Status isLoading={isLoading} error={error} videos={videos} />
    </>
  );
}

