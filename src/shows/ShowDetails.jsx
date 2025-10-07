import { useState } from "react";
import "./shows.css";

export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState();

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
          <li
            key={episode.number}
            style={{
              cursor: "pointer",
              background: selectedEpisode === episode ? "#eee" : "inherit",
            }}
            onClick={() => setSelectedEpisode(episode)}
          >
            Episode {episode.number}: {episode.title}
          </li>
        ))}
      </ul>
      <h3>Episode Details</h3>
      <p>
        <strong>Title:</strong> {selectedEpisode.title}
      </p>
      <p>
        <strong>Description:</strong> {selectedEpisode.description}
      </p>
    </div>
  );
}
