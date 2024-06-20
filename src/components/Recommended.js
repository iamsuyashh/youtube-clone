import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const RecommendedVideos = () => {
  const recommendedVideos = useSelector((state) => state.youtubeApp.recommendedVideos);

  return (
    <div className="recommended-videos">
      {recommendedVideos.map((video) => (
        <Card key={video.videoId} data={video} />
      ))}
    </div>
  );
};

export default RecommendedVideos;
