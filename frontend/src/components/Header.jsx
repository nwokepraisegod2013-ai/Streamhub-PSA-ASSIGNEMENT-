export default function Header({ query, onQueryChange }) {
  return (
    <header className="header">
      <div className="header__inner">
        <span className="logo">
          Stream<em>Hub</em>
        </span>

        <label className="search">
          <svg className="search__icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="8.5" cy="8.5" r="6" stroke="currentColor" strokeWidth="1.6" />
            <path d="M13.3 13.3 17.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search titles"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            aria-label="Search titles"
          />
        </label>
      </div>
    </header>
  );
}
