import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../../context/YoutubeApiContext';
import Status from '../../VideoCard/Status';

export default function StudyBtn() {

  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos, }
   = useQuery(['videos'],() => youtube.Study());
  
  // When the music button is clicked, then show the lists of music and status.
  return (
    <>
      <Status isLoading={isLoading} error={error} videos={videos} />
    </>
  );
}