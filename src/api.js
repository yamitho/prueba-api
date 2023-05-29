import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Cambia esto por la URL base de tu API
});

export default {
  get(endpoint) {
    return apiClient.get(endpoint);
  },

  post(endpoint, data) {
    return apiClient.post(endpoint, data);
  },

  put(endpoint, data) {
    return apiClient.put(endpoint, data);
  },

  delete(endpoint) {
    return apiClient.delete(endpoint);
  },
};