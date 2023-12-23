import React, { useState } from 'react';
import './Loginform.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loginform = () => {
  const [loginData, setLoginData] = useState({
    customer_id: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        console.log('Login successful');
        navigate('/allcourses');
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="container-login ">
       <div className='welcome'>
        <h1 class=".h1">Welcome to</h1>
        <h2 class=".h2">Crystal Delta</h2>
        <h3 class=".h3">e-Learning</h3>
       </div>
     
     
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <h4>Login to your account</h4>
          <label>Customer ID</label>
          <input
            type="text"
            name="customer_id"
            value={loginData.customer_id}
            onChange={handleInputChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
          />
          <button type="submit" class="logbtn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Loginform;