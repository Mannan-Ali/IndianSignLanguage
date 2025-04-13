import React, { useState, useEffect } from "react";
import videoData from "../data/videos.json";
import "../styles/embed.css";

export const Embed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setVideos(videoData.videos);
    setLoading(false);
  }, []);

  const VideoCard = ({ video }) => {
    return (
      <div className="video-card">
        <h2 className="video-title">{video.title}</h2>
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${video.embedId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    );
  };

  return (
    <div className="learn-sign-container">
      <div className="learn-sign-header">
        <h1>Learn Indian Sign Language</h1>
        <p>
          Watch these tutorial videos to learn basic Indian Sign Language signs
          and phrases.
        </p>
      </div>

      {loading ? (
        <div className="loading">Loading videos...</div>
      ) : (
        <div className="video-grid">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}

      <div className="learn-more-section">
        <h2>Additional Resources</h2>
        <ul>
          <li>
            <a
              href="http://islrtc.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Indian Sign Language Research and Training Centre
            </a>
          </li>
          <li>
            <a
              href="https://indiansignlanguage.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Indian Sign Language Dictionary
            </a>
          </li>
          <li>
            <a
              href="https://signlanguagevideos.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              More Sign Language Video Tutorials
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
