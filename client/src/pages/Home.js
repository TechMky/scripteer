import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import BatchSelector from '../components/BatchSelector';
import AppContext from '../context/AppContext';

function Home() {

  const {token} = useContext(AppContext);


  // if (!token) {
  //   return <Redirect to='/login'/>
  // }


  return (
    <div className="Home">
      <h1>Home page</h1>
      <BatchSelector />
    </div>
  )
}

export default Home;
