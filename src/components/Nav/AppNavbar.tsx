import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Image, Navbar, Nav } from 'shared/libs';
import { fetchHandler } from 'shared/utils/Http';

export const AppNavbar: FC<unknown> = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [img, setImg] = useState<string>('');
  const history = useHistory();

  useEffect(() => {
    const fetchImg = async () => {
      const { results } = await fetchHandler('https://randomuser.me/api/');
      const { thumbnail } = results[0].picture;

      setImg(thumbnail);
      setLoading(false);
    };

    fetchImg();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('google');

    history.push('/login');
    window.location.reload();
  };

  return (
    <>
      {loading ? null : (
        <Navbar
          data-testid="app-navbar"
          className="app-navbar"
          sticky="top"
          collapseOnSelect
          expand="lg"
        >
          <Navbar.Brand className="text-light" href="#home">
            Journey
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="text-light" onClick={handleLogout}>
                Log Out
              </Nav.Link>
              <Image src={img} roundedCircle />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </>
  );
};
