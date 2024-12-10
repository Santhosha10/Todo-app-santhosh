import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (storedUsername && storedPassword) {
      navigate('/todo');
    }
  }, [navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    }

    setUsername('');
    setPassword('');
    navigate('/todo');
  }

  function userHandle(e) {
    setUsername(e.target.value);
  }

  function passwordHandle(e) {
    setPassword(e.target.value);
  }

  function rememberHandle(e) {
    setRememberMe(e.target.checked);
  }

  function handleForget(){
    
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-center px-6 py-12 w-1/2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="flex justify-center text-3xl">Log In To Todo List</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <label className="block text-sm/6 font-medium p-2 text-gray-900">
                UserName
              </label>
              <input
                type="email"
                placeholder="Enter Username"
                className="block w-full rounded-md bg-white p-2 text-gray-900 outline outline-gray-300"
                value={username}
                onChange={userHandle}
                required
              />
            </div>
            <div>
              <label className="block text-sm/6 font-medium text-gray-900 p-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="block w-full rounded-md bg-white p-2 text-gray-900 outline outline-gray-300"
                value={password}
                onChange={passwordHandle}
                required
              />
            </div>
            <div className="p-3 mt-3">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={rememberHandle}
              />
              <label className='p-2 text-gray-700'>Remember Me</label>
              <button onClick={handleForget}
                  className='text-base text-gray-400 underline '
                >Forget Password</button>
            </div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-600 p-2 text-sm/6 font-semibold text-white"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-cover bg-center login-bg"></div>
    </div>
  );
};

export default LogIn;