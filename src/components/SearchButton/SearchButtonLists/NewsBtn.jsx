import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../../context/YoutubeApiContext';
import Status from '../../VideoCard/Status';

export default function News() {

  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos, }
    = useQuery(['videos'], () => youtube.News());

  // When the News button is clicked, then show the lists of News and status.
  return (
    <>
      <Status isLoading={isLoading} error={error} videos={videos} />
    </>
  );
}

