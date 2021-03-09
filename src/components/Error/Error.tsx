import React from 'react';

import error from 'shared/assets/error.svg';

export const Error = () => {
  return (
    <div id="error-container">
      <img id="error-graphic" src={error} alt="error" />
      <h1 id="error-text">Oops! Something went wrong...</h1>
    </div>
  );
};
