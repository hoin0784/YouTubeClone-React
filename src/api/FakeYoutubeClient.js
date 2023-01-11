import axios from 'axios';

export default class FakeYoutubeClient {
  async search(value) {
    
    return axios.get('/videos/search.json');
  }
  async videos() {
    return axios.get('/videos/popular.json'); 
  }
  async music() {
    return axios.get('/videos/Music.json');
  }
  async News(){
    return axios.get('/videos/News.json');
  }
  async Games(){
    return axios.get('/videos/Games.json');
  }
  async Live(){
    return axios.get('/videos/Live.json');
  }
  async Movies(){
    return axios.get('/videos/Movies.json');
  }
  async Sports() {
    return axios.get('/videos/Sports.json');
  }
}
