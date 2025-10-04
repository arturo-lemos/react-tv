import { useState } from "react";

export default function NavBar({ setSelectedShow, shows, selectedShow }) {
  return (
    <nav>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <button onClick={() => setSelectedShow(show)}>{show.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
