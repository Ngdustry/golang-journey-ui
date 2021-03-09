const clearToken = () => {
  localStorage.removeItem('google');
  return false;
};

export const validateToken = async (): Promise<Boolean> => {
  const token = localStorage.getItem('google');
  if (!token) return false;

  const googleURL = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`;
  const res = await fetch(googleURL);
  if (res.status === 400) {
    clearToken();
  }

  const { exp } = await res.json();

  if (Date.now() > exp * 1000) {
    clearToken();
  }
  return true;
};
