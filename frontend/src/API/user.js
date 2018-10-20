import api from './api'

const KEY = 'HISSUES';

export async function login(body) {
  const { data } = await api.post('/login', body);
  console.log('Setting localstorage', data);
  localStorage.setItem(KEY, JSON.stringify(data));
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
