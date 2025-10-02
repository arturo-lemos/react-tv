import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ tvShow }) {
  const [ShowDetails] = useState();
  if (!selectedShow) {
    return (
      <section>
        <h2>Show Details</h2>
        <p>Please select a show</p>
      </section>
    );
  }

  return (
    <div className="show-details">
      <h2>Episode List</h2>
      <p></p>
      <h2>Show Details</h2>
      <p>{EpisodeDetails.description}</p>
    </div>
  );
}
