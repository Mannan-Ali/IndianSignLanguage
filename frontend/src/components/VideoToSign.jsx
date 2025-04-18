import React, { useState, useEffect } from "react";

const VideoToSign = () => {
  const [detectedSigns, setDetectedSigns] = useState("");
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const fetchSentence = async () => {
      try {
        const response = await fetch("http://localhost:5000/get_sentence");
        if (response.ok) {
          const data = await response.json();
          setDetectedSigns(data.sentence);
          setIsConnected(true);
        } else {
          console.error("Failed to fetch sentence data");
          setIsConnected(false);
        }
      } catch (error) {
        console.error("Error fetching sentence:", error);
        setIsConnected(false);
      }
    };

    fetchSentence();
    const intervalId = setInterval(fetchSentence, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="desc section sign__sec" id="desc">
      <h1>Sign To Text</h1>
      <div className="cardContainer">
        <div className="card">
          <div className="videoContainer">
            {isConnected ? (
              <img
                src="http://localhost:5000/video_feed"
                alt="Live Video"
                onError={() => setIsConnected(false)}
              />
            ) : (
              <div className="connectionError">
                <p>
                  Connection to video feed failed. Make sure the backend server
                  is running.
                </p>
              </div>
            )}
          </div>
          <div className="descriptionSection">
            <textarea
              value={detectedSigns || "......"}
              type="text"
              name="fname"
              id="fname"
              placeholder="........."
              readOnly
            />
            <div className="statusIndicator">
              <div
                className={`indicator ${
                  isConnected ? "connected" : "disconnected"
                }`}
              ></div>
              <span>
                {isConnected
                  ? "Connected to server"
                  : "Disconnected from server"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoToSign;
