import React from "react";
import video from "../assets/video-thala.mp4";

export default function Video() {
  return (
    <div>
        <h1 className="words">Thala For Reason...7 7 7 </h1>
      <video width="320px" height="320px" autoPlay controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
