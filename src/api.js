// File: src/api.js
import axios from 'axios';

// Gera ou recupera o clientID único para este navegador
let clientId = localStorage.getItem('meuMercadoClientID');
if (!clientId) {
  clientId = crypto.randomUUID(); // Função nativa do navegador para gerar IDs únicos
  localStorage.setItem('meuMercadoClientID', clientId);
}

// Cria uma instância do axios configurada para se comunicar com o seu back-end
const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api', // A porta do seu back-end
});

// Isso é um "interceptor". Ele adiciona o clientID em todas as requisições
// para que o back-end saiba quem está fazendo a chamada.
apiClient.interceptors.request.use(config => {
  config.headers['x-client-id'] = clientId;
  return config;
}, error => {
  return Promise.reject(error);
});

export default apiClient;