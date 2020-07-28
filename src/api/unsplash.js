import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID L2L3l2pfv0T1sl4S_0FusntHddU75RB9OZd3JnDr904',
  },
});
