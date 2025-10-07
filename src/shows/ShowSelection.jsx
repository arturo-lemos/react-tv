import "./shows.css";

export default function ShowSelection() {
  return (
    <nav className="shows">
      <ul>
        {tvShows.map((show) => (
          <li key={show.id} onClick={() => setSelectedShow(show)}>
            {show.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
