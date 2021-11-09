import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import BatchSelector from '../components/BatchSelector';
import FeedbackReport from '../components/FeedbackReport';
import AppContext from '../context/AppContext';
import { LOGIN_URL } from '../urlLinks';

function Home() {

  const {token} = useContext(AppContext);


  if (!token) {
    return <Redirect to={LOGIN_URL}/>
  }


  return (
    <div className="Home">
      <BatchSelector />
      <FeedbackReport />
    </div>
  )
}

export default Home;
