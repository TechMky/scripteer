import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserContext from '../context/UserContext';

function Home() {

  const {token} = useContext(UserContext);


  if (!token) {
    return <Redirect to='/login'/>
  }


  return (
    <div className="Home">
      <h1>Home page</h1>
      <Link to="/about">Go to About page</Link>
    </div>
  )
}

export default Home;
