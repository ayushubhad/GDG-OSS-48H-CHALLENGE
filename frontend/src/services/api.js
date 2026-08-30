import axios from 'axios';

let rawUrl =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD
    ? 'https://gdg-eventhub-backend.onrender.com/api'
    : 'http://localhost:5000/api');
const API_URL = rawUrl.endsWith('/api') ? rawUrl : `${rawUrl.replace(/\/+$/, '')}/api`;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getEvents = async () => {
  const response = await api.get('/events');
  return response.data;
};

export const getEventById = async (id) => {
  const response = await api.get(`/events/${id}`);
  return response.data;
};

export const registerForEvent = async (registrationData) => {
  const response = await api.post('/register', registrationData);
  return response.data;
};

export default api;
