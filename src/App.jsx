/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import { tvShows } from "./shows/data";

import EpisodeList from "./episodes/EpisodeList";
import EpisodeDetails from "./episodes/EpisodeDetails";

export default function App() {
  const [episodeList] = useState(tvShows);
  const [selectedEpisode, setSelectedEpisode] = useState();

  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
        <EpisodeList
          name={tvShows[0].name}
          episodes={tvShows[0].episodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails selectedEpisode={selectedEpisode} />
      </main>
    </>
  );
}
