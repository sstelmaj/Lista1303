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
  }
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="p-4 sm:p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="cursor-pointer" onClick={() => setSelectedVideo(video.url)}>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-auto rounded-lg border-2 border-black shadow-lg hover:scale-105 transition-transform"
            />
            <p className="text-center text-white mt-2 text-sm sm:text-base">{video.title}</p>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl">
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-gray-800 rounded-full p-2 hover:bg-gray-700"
              onClick={() => setSelectedVideo(null)}
            >
              ✖
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-auto"
                src={selectedVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
