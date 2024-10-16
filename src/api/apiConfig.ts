import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer Ng.aVsCwzF4d7NvLGh0aGDTnq9C0xdR7G7q_4qdZPLakDks3jTIehb4Uz__QIxx',
  },
});
