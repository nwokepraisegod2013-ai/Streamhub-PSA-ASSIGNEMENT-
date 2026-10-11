export default function VideoCard({ video, onPlay }) {
  return (
    <button className="card" onClick={() => onPlay(video)} aria-label={`Play ${video.title}`}>
      <span className="card__thumb">
        <img src={video.thumbnail_url} alt="" loading="lazy" />
        <span className="card__duration">{video.duration}</span>
        <span className="card__play" aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.5 4.8v10.4a1 1 0 0 0 1.53.85l8.2-5.2a1 1 0 0 0 0-1.7l-8.2-5.2a1 1 0 0 0-1.53.85Z" />
          </svg>
        </span>
      </span>
      <span className="card__title">{video.title}</span>
    </button>
  );
}
