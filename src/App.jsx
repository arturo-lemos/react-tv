/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import { tvShows } from "./shows/data";

import EpisodeList from "./episodes/EpisodeList";
import EpisodeDetails from "./episodes/EpisodeDetails";

import NavBar from "./NavBar";

export default function App() {
  const [selectedEpisode, setSelectedEpisode] = useState();

  const [shows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(shows[0]);

  function handleShowSelection(show) {
    setSelectedShow(show);
    setSelectedEpisode(undefined);
  }

  return (
    <>
      <header>
        <p>React TV</p>
        <NavBar
          shows={shows}
          selectedShow={selectedShow}
          setSelectedShow={handleShowSelection}
        />
      </header>
      <main>
        <EpisodeList
          name={selectedShow.name}
          episodes={selectedShow.episodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails episode={selectedEpisode} />
      </main>
    </>
  );
}
