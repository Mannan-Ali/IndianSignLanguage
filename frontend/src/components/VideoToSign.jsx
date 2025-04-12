import React from "react";

const VideoToSign = () => {
  return (
    <section className="desc section" id="desc">
      <h1>Sign Language Detection</h1>
      <div className="cardContainer">
        <div className="card">
          <div className="videoContainer">
            <img src="http://localhost:5000/video_feed" alt="Live Video" />
          </div>
          <div className="descriptionSection">
            <textarea
              type="text"
              name="fname"
              id="fname"
              placeholder="........."
              readOnly
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoToSign;
