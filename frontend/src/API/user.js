import api from './api'

const KEY = 'CURRENT_USER';

export async function login(body) {
  const { data } = await api.post('/login', body);
  localStorage.setItem(KEY, data);
  return data;
}

export async function register(body) {
  const { data } = await api.post('/register', body);
  return data;
}

export function logout() {
  localStorage.removeItem(KEY);
}

export async function getMe() {
  try {
    return await api.get('/me');
  } catch (err) {
    throw err;
  }
}
