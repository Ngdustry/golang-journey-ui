const BASE_URL = process.env.REACT_APP_AUTH_URL;

const clearToken = () => {
  localStorage.removeItem('google');
  return false;
};

export const validateToken = async (): Promise<Boolean> => {
  const token = localStorage.getItem('google');
  if (!token) return false;

  const authUrl = `${BASE_URL}${token}`;
  const res = await fetch(authUrl);
  if (res.status === 400) {
    clearToken();
  }

  const { exp } = await res.json();

  if (Date.now() > exp * 1000) {
    clearToken();
  }
  return true;
};
