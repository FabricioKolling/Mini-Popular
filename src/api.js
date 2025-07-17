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

export default apiClient;