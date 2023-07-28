
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style/success.css';

export default function MyComponent() {
  const user = useSelector((state) => state.user);
  const nav = useNavigate();

  useEffect(() => {
    console.log({ user });
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    nav('/Home');
  };

  return (
    <div>
      <h1>UPDATED PROFILE, {user}</h1>
      <center>
      <button className="custom-button" onClick={handleLogin}>
          Done
      </button>
      </center>
    </div>
  );
}
