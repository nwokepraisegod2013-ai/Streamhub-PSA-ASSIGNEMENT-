import { useEffect } from 'react';

export default function PlayerModal({ video, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!video) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={video.title} onClick={onClose}>
      <div className="modal__panel" onClick={(event) => event.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close player">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </button>

        <div className="modal__player">
          <iframe
            src={`${video.embed_url}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="modal__info">
          <h2>{video.title}</h2>
          <p className="modal__meta">
            {video.category} · {video.duration}
          </p>
          <p className="modal__description">{video.description}</p>
        </div>
      </div>
    </div>
  );
}
