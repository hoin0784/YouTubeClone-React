export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  // search completed
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

  // keyword search completed
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
  
  // Most popular completed
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

  // Music completed
  // If you want to use mock data,
  // then use .music instead of .search(Real Youtube data)
  async Music() {
    return this.apiClient
      .music({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: 'top hits 2023 best songs ',
          type: 'video',
        },
      })
      .then((res) => res.data.items)
  }
  
  // News completed
  // If you want to use mock data,
  // then use .News instead of .search(Real Youtube data)
  async News() {
    return this.apiClient
      .News({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: 'US News live now',
          type: 'video',
          eventType:'live',
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  // Game completed
  // If you want to use mock data,
  // then use .Games instead of .search(Real Youtube data)
  async Games() {
    return this.apiClient
      .Games({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: 'games for pc',
          type: 'video',
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  
  // Need to fix
  // If you want to use mock data,
  // then use .Movies instead of .search(Real Youtube data)
  async Movies() {
    return this.apiClient
      .Movies({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: 'games for pc',
          type: 'video',
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  
  // Need to fix
  // If you want to use mock data,
  // then use .Sports instead of .search(Real Youtube data)
  async Sports() {
    return this.apiClient
      .Sports({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: 'games for pc',
          type: 'video',
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  
  // Live completed
  // If you want to use mock data,
  // then use .Live instead of .search(Real Youtube data)
  async Live() {
    return this.apiClient
      .Live({
        params: {
          part: 'snippet',
          maxResults: 25,
          eventType: 'live',
          type: 'video',
          regionCode: 'US',
          videoCategoryId: 20
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

}
