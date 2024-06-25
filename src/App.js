import './index.css';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';
import { useState } from 'react';


function App() {
  const [showAddFriend,setShowAddFriend] = useState(false);
  const [friends,setFriends] = useState([]);

  function handleShowAddFriend(){
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriends(friend){
    setFriends(friends=>[...friends,friend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} on />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriends} />}
        <Button onClick={handleShowAddFriend} >{showAddFriend ? "Close":"Add Friend"} </Button>
      </div>
      <FormSplitBill/>
    </div>
  );
}

export default App;
