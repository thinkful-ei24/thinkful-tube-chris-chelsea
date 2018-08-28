'use strict';

const store = (function() {
const videos = [];
const setVideos = function(videos){
 return this.videos;
};

return {
videos,
setVideos
}
})();

const Api = (function(){
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const fetchVideos = function(searchTerm, callback){
  const query = {
    part: 'snippet',
    key: API_KEY,
    q: searchTerm
  };
  $.getJSON(BASE_URL, query, callback);
};

return {
fetchVideos
};
})();



const MOCK_DATA = {
  kind: 'youtube#searchListResponse',
  etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/uOxbVTYys9VZqGEsjW5NUwImai0"',
  nextPageToken: 'CAUQAA',
  regionCode: 'US',
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 5
  },
  items: [
    {
      kind: 'youtube#searchResult',
      etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/3GvmmEApNX5dJzBymRzvcBvZGdQ"',
      id: {
        kind: 'youtube#video',
        videoId: 'N2z5dSRkv_I'
      },
      snippet: {
        publishedAt: '2018-08-26T11:00:04.000Z',
        channelId: 'UC9obdDRxQkmn_4YpcBMTYLw',
        title: "Bet you havent't LAUGHED THAT HARD before! - Super FUNNY CATS",
        description:
          'The funniest animals on the planet are definitely cats! They never fail to make us laugh and happy! This is the most impossible TRY NOT TO LAUGH challenge ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/N2z5dSRkv_I/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/N2z5dSRkv_I/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/N2z5dSRkv_I/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Tiger FunnyWorks',
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/CIzHxn5Tg3A4s2nJ1YNkNe9bwj8"',
      id: {
        kind: 'youtube#video',
        videoId: 'hY7m5jjJ9mM'
      },
      snippet: {
        publishedAt: '2017-05-31T09:30:02.000Z',
        channelId: 'UC9obdDRxQkmn_4YpcBMTYLw',
        title: 'CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation',
        description:
          'Cats are amazing creatures because they make us laugh all the time! Watching funny cats is the hardest try not to laugh challenge! Just look how all these cats ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/hY7m5jjJ9mM/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/hY7m5jjJ9mM/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Tiger FunnyWorks',
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/JkELFAyKQf3jC6ObuMsX4Hc3Hhw"',
      id: {
        kind: 'youtube#video',
        videoId: 'Rmx1JGTX1yw'
      },
      snippet: {
        publishedAt: '2018-07-26T11:00:05.000Z',
        channelId: 'UC9obdDRxQkmn_4YpcBMTYLw',
        title: 'Funniest CATS EVER - Die LAUGING NOW!',
        description:
          'Cats are the best pets and animals! Cats and kittens are so funny, they make us laugh and happy! They never fail to amuse us! This is the most impossible TRY ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/Rmx1JGTX1yw/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/Rmx1JGTX1yw/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/Rmx1JGTX1yw/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Tiger FunnyWorks',
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/qT9xssHPIvatz74gf98V67GmP4s"',
      id: {
        kind: 'youtube#video',
        videoId: 'uCLEq9V0-Yk'
      },
      snippet: {
        publishedAt: '2018-05-17T13:02:36.000Z',
        channelId: 'UCKy3MG7_If9KlVuvw3rPMfw',
        title:
          'SUPER WEIRD CATS that will totally CONFUSE YOU! - Extremely FUNNY CAT VIDEOS compilation',
        description:
          'Here are videos of super weird cats and kittens that will confuse you and at the end, most important, make you laugh! These cats are so super hilarious that I bet ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/uCLEq9V0-Yk/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/uCLEq9V0-Yk/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/uCLEq9V0-Yk/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Tiger Productions',
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/2J8q77MF8IM0F88ttFhy4DodrqM"',
      id: {
        kind: 'youtube#video',
        videoId: '-zzWoYIAv5I'
      },
      snippet: {
        publishedAt: '2018-06-21T16:04:58.000Z',
        channelId: 'UC9obdDRxQkmn_4YpcBMTYLw',
        title: 'CATS make us LAUGH ALL THE TIME! - Ultra FUNNY CAT videos',
        description:
          'Ultra funny cats and kitten that will make you cry with laughter! Cats are the best animals, they make us laugh all the time! This is the hardest TRY NOT TO ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/-zzWoYIAv5I/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/-zzWoYIAv5I/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/-zzWoYIAv5I/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Tiger FunnyWorks',
        liveBroadcastContent: 'none'
      }
    }
  ]
};
const API_KEY = 'AIzaSyA0i_skrMX1fC5anAjTd_QV1jRRxwxSo14';

/*
  We want our store to hold an array of "decorated" video objects - i.e. objects that
  have been transformed into ONLY the necessary data we're displaying on our page. 
  (Removes extraneous dataset from Youtube.)
  
  Example decorated video object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }
*/


// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

/**
 * @function fetchVideos
 * Async function, responsible for calling the Youtube API with jQuery, constructing
 * the correct query object, and passing along the callback into the AJAX call.
 * @param {string}   searchTerm
 * @param {function} callback
 */
// TASK:
// 1. Use `searchTerm` to construct the right query object based on the Youtube API docs
//    - Refer to curriculum assignment for help with the required parameters
// 2. Make a getJSON call using the query object and sending the provided callback in
//    as the last argument
//
// TEST IT! Execute this function and console log the results inside the callback.


//TESTING fetchVideos by pushing in our params
// fetchVideos('cats', callback => {
//   console.log(callback);
// });

/**
 * @function decorateResponse
 * Uses Youtube API response to create an array of "decorated" video objects as
 * defined at the top of the file.
 * @param   {object} response - should match Youtube API response shape
 * @returns {array}
 */

// TASK:
// 1. Map through the response object's `items` array

// 2. Return an array of objects, where each object contains the keys `id`, `title`,
//    `thumbnail` which each hold the appropriate values from the API item object. You
//    WILL have to dig into several nested properties!
//
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
  return response.items.map(item => {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.default.url
    };
  });
};

//decorateResponse(MOCK_DATA);

/**
 * @function generateVideoItemHtml
 * Template function, creates an HTML string from a single decorated video object
 * @param   {object} video - decorated video object
 * @returns {string} HTML
 */
// TASK:
// 1. Using the decorated object, return an HTML string containing all the expected
// TEST IT!
const generateVideoItemHtml = function(video) {
  return `<li data-id="${video.id}">
            <h3>${video.title}</h3>
            <img src="${video.thumbnail}"/>
          </li>
  `;
};

//const decoratedArrayOfVideos = decorateResponse(MOCK_DATA);
//console.log(generateVideoItemHtml(decoratedArrayOfVideos[2]));

/**
 * @function addVideosToStore
 * Store modification function to set decorated video objects
 * @param {array} videos - decorated video objects
 */
// TASK:
// 1. Set the received array as the value held in store.videos
// TEST IT!
const addVideosToStore = function(videos) {
  store.videos = videos;
};

/**
 * @function render
 * Responsible for scanning store and rendering the video list to DOM
 */
// TASK:
// 1. Map through `store.videos`, sending each `video` through `generateVideoItemHtml`
// 2. Add this array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {
  const htmlElements = store.videos.map(video => generateVideoItemHtml(video));
  $('.results').html(htmlElements);
};

/**
 * @function handleFormSubmit
 * Adds form "submit" event listener that 1) initiates API call, 2) modifies store,
 * and 3) invokes render
 */
// TASK:
// 2. Add an event listener to the form that will:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the
//      `addVideosToStore` function
//   g) Inside the callback, run the `render` function
// TEST IT!
const handleFormSubmit = function() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#search-term').val();
    event.target.reset();

    fetchVideos(searchTerm, response => {
      const decoratedVideos = decorateResponse(response);
      addVideosToStore(decoratedVideos);
      render();
    });
  });
};

// When DOM is ready:
$(function() {
  handleFormSubmit();
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});
