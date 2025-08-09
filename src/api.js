import axios from 'axios';

let clientId = localStorage.getItem('meuMercadoClientID');
if (!clientId) {
  clientId = crypto.randomUUID();
  localStorage.setItem('meuMercadoClientID', clientId);
}

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api', 
});

apiClient.interceptors.request.use(config => {
  config.headers['x-client-id'] = clientId;
  return config;
}, error => {
  return Promise.reject(error);
});

// Agrupamos os métodos em um objeto para exportação
const api = {
  get: (url, config) => apiClient.get(url, config),
  post: (url, data, config) => apiClient.post(url, data, config),
  patch: (url, data, config) => apiClient.patch(url, data, config),
  delete: (url, config) => apiClient.delete(url, config),
};

export default api;