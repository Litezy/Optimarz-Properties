import { useState, useEffect } from "react";

interface YouTubeEmbedProps {
  url: string;
  title?: string;
  className?: string;
}

function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtu\.be\/)([A-Za-z0-9_-]{11})/,
    /(?:youtube\.com\/watch\?v=)([A-Za-z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/,
    /(?:youtube\.com\/v\/)([A-Za-z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

const OfflineIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white/50">
    <path d="M24 8.98C21.15 6.11 17.28 4.5 13 4.5S4.85 6.11 2 8.98L0 7l1-1C4.28 2.8 8.41 1 13 1s8.72 1.8 12 5l1 1-2 1.98zM13 9c2.76 0 5.26 1.12 7.07 2.93l-2.12 2.12A6.94 6.94 0 0 0 13 12c-1.93 0-3.68.78-4.95 2.05L5.93 11.93C7.74 10.12 10.24 9 13 9zm0 6c1.1 0 2.1.45 2.83 1.17L13 19l-2.83-2.83A3.98 3.98 0 0 1 13 15z" />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white/50">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

const VideoFallback = ({
  title,
  videoId,
  isOffline,
}: {
  title: string;
  videoId: string;
  isOffline: boolean;
}) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 px-6 text-center">
    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
      {isOffline ? <OfflineIcon /> : <ErrorIcon />}
    </div>
    <p className="mb-1 text-sm font-semibold text-white/80">{title}</p>
    <p className="mb-6 text-xs text-white/40">
      {isOffline ? "No internet connection" : "Video could not be loaded"}
    </p>
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-full bg-red-600 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-500"
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-white">
        <path d="M8 5v14l11-7z" />
      </svg>
      Watch on YouTube
    </a>
  </div>
);

const YouTubeEmbed = ({ url, title = "YouTube video", className = "" }: YouTubeEmbedProps) => {
  const [isOffline, setIsOffline] = useState(() => !navigator.onLine);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const goOffline = () => setIsOffline(true);
    const goOnline = () => {
      setIsOffline(false);
      setHasError(false);
    };
    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);
    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, []);

  const videoId = extractVideoId(url);
  if (!videoId) return null;

  const showFallback = isOffline || hasError;

  return (
    <div className={`w-full overflow-hidden rounded-2xl shadow-lg ${className}`}>
      <div className="relative w-full aspect-video">
        {showFallback ? (
          <VideoFallback title={title} videoId={videoId} isOffline={isOffline} />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onError={() => setHasError(true)}
            className="absolute inset-0 w-full h-full border-0"
          />
        )}
      </div>
    </div>
  );
};

export default YouTubeEmbed;
