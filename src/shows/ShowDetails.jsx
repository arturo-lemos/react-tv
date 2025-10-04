import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  if (!show) {
    return (
      <section>
        <p>Please select a show</p>
      </section>
    );
  }

  return (
    <div className="show-details">
      <h2>{show.name}</h2>
      <ul>
        {show.episodes.map((episode) => (
          <li key={episode.number}>
            Episode {episode.number}: {episode.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
