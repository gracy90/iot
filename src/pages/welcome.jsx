import React from 'react';
import iot1 from '../images/iot1.png'; // Import the PNG image
import "../index.css"
import { useNavigate } from 'react-router-dom';
import {getAuth} from 'firebase/auth'
import NavBar from '../components/navBar';

const headingOneStyle = {
  textAlign: 'left',
  margin: '0',
  color: 'white',
  fontSize: '4em',
  lineHeight: '1'
};

const headingTwoStyle = {
  textAlign: 'left',
  marginTop: '30px',
  textTransform: 'uppercase',
  color: 'white',
  fontWeight: 'normal',
};


function Welcome() {
    const navigate=useNavigate();
    const auth = getAuth();
    console.log(auth.currentUser)

  return (
    <>
    <NavBar />
    <div className='Container' >
      <div >
        <h1 style={headingOneStyle}>Welcome To The Smart<br/>Environmental<br/>Monitoring System</h1>
        <h2 style={headingTwoStyle}>Monitor illegal mining activities in Atewa Forest</h2>

       {auth.currentUser==null&&<button className='loginButtonStyle' onClick={()=>navigate('/login')}>Login</button>} 
      </div>
      <div className='imgStyle'>
        <img src={iot1} alt="IoT One" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
    </>
  );
}

export default Welcome;

