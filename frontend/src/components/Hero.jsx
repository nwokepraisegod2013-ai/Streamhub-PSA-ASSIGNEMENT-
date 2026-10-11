export default function Hero({ video, onPlay }) {
  if (!video) return null;

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${video.thumbnail_url})` }}
    >
      <div className="hero__scrim" />
      <div className="hero__content">
        <p className="hero__eyebrow">Now screening</p>
        <h1 className="hero__title">{video.title}</h1>
        <p className="hero__description">{video.description}</p>
        <div className="hero__actions">
          <button className="button button--primary" onClick={() => onPlay(video)}>
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M6.5 4.8v10.4a1 1 0 0 0 1.53.85l8.2-5.2a1 1 0 0 0 0-1.7l-8.2-5.2a1 1 0 0 0-1.53.85Z" />
            </svg>
            Play
          </button>
          <span className="hero__meta">
            {video.category} · {video.duration}
          </span>
        </div>
      </div>
    </section>
  );
}
