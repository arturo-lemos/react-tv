import { tvShows } from "./data";
import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
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
