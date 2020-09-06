import React from 'react';
import './Heading.css';
import Logo from './../../Social Media.png';

const Heading = (props) => {
  const friends = props.friends;
  // console.log(friends);
  const totalSalary = friends.reduce((sum, friend) => {
    return sum + friend.salary;
  }, 0);
  
  return (
    <div className="navbar">
      <nav>
        <img src={Logo} alt=""/>
        <li>Total Added: {friends.length}</li>
        <li>Total Salary: ${totalSalary.toFixed(2)}</li>
      </nav>
    </div>
  );
};

export default Heading;