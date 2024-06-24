import './index.css';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';
import { useState } from 'react';


function App() {
  const [showAddFriend,setShowAddFriend] = useState(false);

  function handleShowAddFriend(){
    setShowAddFriend(!showAddFriend);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend} >{showAddFriend ? "Close":"Add Friend"} </Button>
      </div>
      <FormSplitBill/>
    </div>
  );
}

export default App;
