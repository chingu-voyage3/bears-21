import api from './api';

export const KEY = 'HISSUES';

export async function login(body) {
  const { data } = await api.post('/login', body);
  localStorage.setItem(
    KEY,
    JSON.stringify({
      currentUser: { ...data }
    })
  );
  return data;
}

export async function forgotPassword(body) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

export async function register(body) {
  const { data } = await api.post('/register', body);
  return data;
}

export async function logout() {
  console.log('In logout');
  await api.post('/logout');
  localStorage.removeItem(KEY);
}

export async function getMe() {
  try {
    return await api.get('/me');
  } catch (err) {
    throw err;
  }
}
