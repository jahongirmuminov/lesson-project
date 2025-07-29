export function getYouTubeEmbedUrl(url: string): string {
  const videoIdMatch = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  const videoId = videoIdMatch?.[1];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
}
