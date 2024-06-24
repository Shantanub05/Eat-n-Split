import React from 'react'
import Button from './Button';

const Friend = ({friend}) => {
  return (
    <div className="sidebar">
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} Rs.{Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you Rs.{Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && (
          <p>
           No dues
          </p>
        )}
        <Button >Select</Button>
      </li>
    </div>
  );
  
   
}

export default Friend
