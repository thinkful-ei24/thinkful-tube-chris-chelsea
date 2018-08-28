'use strict';
/* global $*/

//API module
const Api = (function() {
  const API_KEY = 'AIzaSyA0i_skrMX1fC5anAjTd_QV1jRRxwxSo14';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part: 'snippet',
      key: API_KEY,
      maxResults: 50,
      q: searchTerm
    };
    $.getJSON(BASE_URL, query, callback);
  };

  return {
    fetchVideos
  };
})();
