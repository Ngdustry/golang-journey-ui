import React, { FC, useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';

import { validateToken } from 'shared/utils/Auth';
import scrum from 'shared/assets/scrum-board.svg';
import collab from 'shared/assets/collab.svg';

const Login: FC<unknown> = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const history = useHistory();

  useEffect(() => {
    const checkToken = async () => {
      const status = await validateToken();

      if (status) history.push('/');
      else setLoading(false);
    };

    checkToken();
  }, []);

  const responseGoogle = (response: any) => {
    const { id_token: token } = response?.tokenObj;

    if (!token) {
      history.push('/error');
      return;
    }

    localStorage.setItem('google', token);
    history.push('/');
  };

  return (
    <>
      {loading ? null : (
        <div id="login-container">
          <div className="login-graphic-container">
            <img id="login-graphic-1" src={collab} alt="scrum board" />
          </div>
          <div id="login-window-container">
            <div id="login-window">
              <div id="login-text">
                <h2>JOURNEY</h2>
                <div id="login-underline"></div>
                <p>Log in to continue</p>
              </div>
              <div id="login-btn">
                <GoogleLogin
                  clientId={`${process.env.REACT_APP_CLIENT_ID}`}
                  buttonText={'Continue with Google'}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
              </div>
            </div>
          </div>
          <div className="login-graphic-container">
            <img id="login-graphic-2" src={scrum} alt="collab" />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
