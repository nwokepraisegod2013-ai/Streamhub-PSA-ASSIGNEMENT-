import VideoCard from './VideoCard.jsx';

export default function Shelf({ category, videos, onPlay }) {
  if (videos.length === 0) return null;

  return (
    <section className="shelf">
      <h2 className="shelf__title">{category}</h2>
      <div className="shelf__row">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onPlay={onPlay} />
        ))}
      </div>
    </section>
  );
}
