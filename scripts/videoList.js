'use strict';
/* global store, Api, $*/

//VideoList module

const videoList = (function() {
  //Declare generateListItem function that gives us html
  const generateListItem = function(video) {
    return `
      <li data-id="${video.id}">
              <a target="_blank" href="https://www.youtube.com/watch?v=${
                video.id
              }">
              <img src="${video.thumbnail}"/>
              <h3>${video.title}</h3>
              </a>
            </li>
      `;
  };
  //decorate response function
  const decorateResponse = function(response) {
    console.log(response);
    return response.items.map(item => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url
      };
    });
  };

  //Expose a render function that looks into store.videos and invokes generateListItem
  const render = function() {
    const htmlElements = store.videos.map(video => generateListItem(video));
    $('.results').html(htmlElements);
  };

  //Declare a handleFormSubmit
  const handleFormSubmit = function() {
    $('form').submit(event => {
      event.preventDefault();

      const searchTerm = $('#search-term').val();
      event.target.reset();

      Api.fetchVideos(searchTerm, response => {
        const decoratedVideos = decorateResponse(response);
        store.setVideos(decoratedVideos);
        render();
      });
    });
  };

  //Expose bindEventListeners function which invokes event listener
  const bindEventListeners = function() {
    handleFormSubmit();
  };

  return {
    render,
    bindEventListeners
  };
})();