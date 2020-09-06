import React, { useState } from 'react';
import './User.css';
// import Bopi from './../../bopi.PNG';

const User = (props) => {
  const { firstName, lastName, profilePic, salary, job, companyName } = props.user;

  const [btnValue, setBtnValue] = useState('Add Friend');

  const updateBtn = () => {
    if (btnValue === 'Add Friend') {
      setBtnValue('Remove Friend');
    } else {
      setBtnValue('Add Friend');
    }
  }

  return (
    <div className="User">
      <div className="userImgDiv">
        <img src={profilePic} className="userImg" alt=""/>
      </div>
      <div className="userInfo">
        <h3>{firstName} {lastName}</h3>
        <p>{job} at {companyName}</p>
        <p><small>Salary: ${salary}</small></p>
        <button
          className="add-btn"
          onClick={() => {
            props.handelFunction(props.user);
            updateBtn();
          }}
        >{btnValue}</button>
      </div>
    </div>
  );
};

export default User;