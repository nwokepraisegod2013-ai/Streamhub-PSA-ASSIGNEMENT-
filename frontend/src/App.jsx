import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Shelf from './components/Shelf.jsx';
import PlayerModal from './components/PlayerModal.jsx';
import { fetchVideo, fetchVideos } from './api/videos.js';

export default function App() {
  const [videos, setVideos] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [query, setQuery] = useState('');
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    loadVideos();
  }, []);

  function loadVideos() {
    setStatus('loading');
    fetchVideos()
      .then((data) => {
        setVideos(data);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }

  async function handlePlay(video) {
    setActiveVideo(video);
    try {
      const fresh = await fetchVideo(video.id);
      setActiveVideo(fresh);
      setVideos((current) => current.map((item) => (item.id === fresh.id ? fresh : item)));
    } catch {
      // Keep showing the video with the view count we already have.
    }
  }

  const featured = useMemo(() => videos.find((video) => video.is_featured) ?? videos[0], [videos]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return videos;
    return videos.filter(
      (video) =>
        video.title.toLowerCase().includes(term) ||
        video.description?.toLowerCase().includes(term)
    );
  }, [videos, query]);

  const shelves = useMemo(() => {
    const byCategory = new Map();
    for (const video of filtered) {
      if (!byCategory.has(video.category)) byCategory.set(video.category, []);
      byCategory.get(video.category).push(video);
    }
    return Array.from(byCategory.entries());
  }, [filtered]);

  return (
    <div className="app">
      <Header query={query} onQueryChange={setQuery} />

      {status === 'loading' && (
        <div className="state">
          <p>Loading the library…</p>
        </div>
      )}

      {status === 'error' && (
        <div className="state">
          <p>Couldn't reach the StreamHub API.</p>
          <p className="state__hint">Make sure the Laravel server is running on http://localhost:8000.</p>
          <button className="button button--ghost" onClick={loadVideos}>
            Try again
          </button>
        </div>
      )}

      {status === 'ready' && (
        <>
          {!query && <Hero video={featured} onPlay={handlePlay} />}

          <main className="shelves">
            {shelves.length === 0 && (
              <div className="state">
                <p>No titles match "{query}".</p>
              </div>
            )}

            {shelves.map(([category, items]) => (
              <Shelf key={category} category={category} videos={items} onPlay={handlePlay} />
            ))}
          </main>
        </>
      )}

      <PlayerModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}
