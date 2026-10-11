const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

async function request(path) {
  const response = await fetch(`${API_BASE}${path}`);

  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }

  const payload = await response.json();
  return payload.data;
}

export function fetchVideos() {
  return request('/videos');
}

export function fetchVideo(id) {
  return request(`/videos/${id}`);
}
