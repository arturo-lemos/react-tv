export default function NavBar({ setSelectedShow, shows, selectedShow }) {
  return (
    <nav className="nav-bar">
      <ul className="show-list">
        {shows.map((show) => (
          <li
            className={`navbar-item ${show === selectedShow ? "active" : ""}`}
            key={show.name}
          >
            <button
              className="navbar-button"
              onClick={() => setSelectedShow(show)}
            >
              {show.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
