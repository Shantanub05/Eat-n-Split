import React from 'react'
import Button from './Button';

const Friend = ({friend,onSelect,selectFriend}) => {

  const isSelected = selectFriend?.id === friend.id;

  return (
    <div className={isSelected ? "selected":""}>
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
        <Button onClick={()=>onSelect(friend)} >{isSelected? 'Close' :"Select"}</Button>
      </li>
    </div>
  );
  
   
}

export default Friend
