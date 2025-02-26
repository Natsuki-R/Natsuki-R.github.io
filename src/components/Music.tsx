import React, { useState } from "react";
import "./Music.css";
import { ARTISTS } from "../data/music";

const FILTERS = ["All", "Listened", "Not Listened"] as const;

const Music: React.FC = () => {
  return (
    <div className="music-container">
      <h1 className="music-title">🎧 No Music No Life</h1>
      <div className="music-grid">
        {ARTISTS.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </div>
    </div>
  );
};

const ArtistCard: React.FC<{ artist: (typeof ARTISTS)[0] }> = ({ artist }) => {
  const [selectedFilter, setSelectedFilter] =
    useState<(typeof FILTERS)[number]>("All");
  const [isOpen, setIsOpen] = useState(false); // Track accordion state

  const filteredAlbums = artist.albums.filter((album) => {
    if (selectedFilter === "Listened") return album.isListened;
    if (selectedFilter === "Not Listened") return !album.isListened;
    return true; // "All"
  });

  return (
    <div className="artist-card">
      {/* Toggle button for accordion */}
      <div className="artist-name" onClick={() => setIsOpen(!isOpen)}>
        {artist.name} {isOpen ? "▲" : "▼"}
      </div>

      {isOpen && (
        <>
          <div className="artist-genre"># {artist.genre}</div>

          {/* Albums Display */}
          {filteredAlbums.length > 0 ? (
            filteredAlbums.map((album) => (
              <div key={album.id} className="album-card">
                <input
                  className="radio-btn"
                  type="radio"
                  checked={album.isListened}
                  readOnly
                />
                <p className="album-name">
                  {album.artistName && album.artistName + " - "} {album.name} (
                  {album.releasedYear})
                </p>
                <span className="album-ranking">
                  ⭐{album.isListened ? album.ranking : "- "}/10
                </span>
              </div>
            ))
          ) : (
            <p className="no-albums">No albums found.</p>
          )}

          {/* Filter Buttons */}
          <div className="filter-buttons">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                className={`filter-button ${
                  selectedFilter === filter ? "active" : ""
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Music;
