const GOOGLE_API_KEY = "AIzaSyA0VNni4Q0gzrLhaKhV0-E8h_dNN6gFeDE";

export const LIVE_CHAT_COUNT = 25

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const CHANNEL_LOGO_API = (channelId) =>
  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries-clients6.youtube.com/complete/search?ds=";
