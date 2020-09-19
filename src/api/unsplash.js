import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID ipfbuZDQuEbeF-BImyJ_HKAuRnk368AUg1LzjAaE8GM',
  },
});
