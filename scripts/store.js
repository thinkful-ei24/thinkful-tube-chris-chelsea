'use strict';

//STORE module
const store = (function() {
  const videos = [];
  const setVideos = function(videos) {
    this.videos = videos;
  };

  return {
    videos,
    setVideos
  };
})();
