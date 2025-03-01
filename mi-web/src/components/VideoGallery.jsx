import React, { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Video 1",
    thumbnail: "https://img.youtube.com/vi/QqYSqYv--Oo/hqdefault.jpg",
    url: "https://www.youtube.com/embed/QqYSqYv--Oo?si=hReQCoBDlAa1YQI1"
    
  },
  {
    id: 2,
    title: "Video 2",
    thumbnail: "https://img.youtube.com/vi/xZLI0W_hYT8/hqdefault.jpg",
    url: "https://www.youtube.com/embed/xZLI0W_hYT8?si=wKhKHLnvgsrKLIhL" 
  },
  {
    id: 3,
    title: "Video 3",
    thumbnail: "https://img.youtube.com/vi/5eO6dLjiGXU/hqdefault.jpg",
    url: "https://www.youtube.com/embed/5eO6dLjiGXU?si=wbW20z-IS3RSnzxb"
  },
  /*
  {
    id: 4,
    title: "Video 4",
    thumbnail: "https://img.youtube.com/vi/OPEgn_nGT_8/hqdefault.jpg",
    url: "https://www.youtube.com/embed/OPEgn_nGT_8?si=rLzcs1qJjJ4uagNU"
  },
  {
    id: 5,
    title: "Video 5",
    thumbnail: "https://img.youtube.com/vi/v8EXobNAHUg/hqdefault.jpg",
    url: "https://www.youtube.com/embed/v8EXobNAHUg?si=Cr9bn_26pHi7oTpG" 
  }
    */
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="cursor-pointer" onClick={() => setSelectedVideo(video.url)}>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full rounded-lg border-4 border-black shadow-lg hover:scale-105 transition-transform"
            />
            <p className="text-center text-white mt-2">{video.title}</p>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setSelectedVideo(null)}
            >
              ✖
            </button>
            <iframe width="560" height="315" src={selectedVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <button onClick={() => setSelectedVideo(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
