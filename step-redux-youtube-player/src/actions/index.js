const API_KEY = '-TlrS4';

import axios from 'axios';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export function fetchVideos(term) {

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${term}&type=video&videoDefinition=high&key=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_VIDEOS,
    payload: request
  }
}

export function selectVideo(video) {
  return {
    type: SELECT_VIDEO,
    payload: video
  }
}
