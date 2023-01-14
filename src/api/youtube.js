export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id){
    return this.apiClient
    .channels({
      params: {
        part: 'snippet', id
      },
    })
    .then((res)=>res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id){
    return this.apiClient
    .search({
      params:{
        part:'snippet',
        maxResults:25,
        type:'video',
        relatedToVideoId: id,
      },
    })
    .then((res) => res.data.items)
    .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  // Search By Keyword
  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  
  // Most popular navigation & main page videos
  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }

  // Music navigation and query : songs
  async Music() {
    return this.apiClient
      .music({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: '2023 song video',
          type: 'video',
        },
      })
      .then((res) => res.data.items)
  }

  // News navigation and query : US News today
  async News() {
    return this.apiClient
      .News({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: 'US News today',
          type: 'video',
          eventType:'live',
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  // Game navigation and query : games for online pc
  async Games() {
    return this.apiClient
      .Games({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: 'games for online pc ',
          type: 'video',
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  
  // Movie navigation and query : movies trailer
  async Movies() {
    return this.apiClient
      .Movies({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: 'movies trailer',
          type: 'video',
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  
  // Sports navigation and query : EPL highlight
  async Sports() {
    return this.apiClient
      .Sports({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: 'EPL highlight',
          type: 'video',
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  
  // Live navigation and query : live streaming
  async Live() {
    return this.apiClient
      .Live({
        params: {
          part: 'snippet',
          maxResults: 25,
          eventType: 'live',
          type: 'video',
          q:'live streaming ',
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
}
