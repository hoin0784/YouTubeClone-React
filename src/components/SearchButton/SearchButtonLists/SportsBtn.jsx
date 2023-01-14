import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../../context/YoutubeApiContext';
import Status from '../../VideoCard/Status';

export default function Sports() {

  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos, }
    = useQuery(['videos'], () => youtube.Sports());

  // When the Sports button is clicked, then show the lists of Sports and status.
  return (
    <>
      <Status isLoading={isLoading} error={error} videos={videos} />
    </>
  );
}

