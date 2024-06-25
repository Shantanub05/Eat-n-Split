import './index.css';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';
import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend,setShowAddFriend] = useState(false);
  const [friends,setFriends] = useState(initialFriends);
  const [selectFriend,setSelectFriend] = useState([]);

  function handleShowAddFriend(){
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriends(friend){
    setFriends(friends=>[...friends,friend]);
    setShowAddFriend(false);
  }

  function handleSelectFriend(friend){
// setSelectFriend(friend);
setSelectFriend((cur)=> cur?.id === friend?.id ? null : friend);
setShowAddFriend(false); 
  }

  function hanldeSplitBill(value){
setFriends(friends=>friends.map(friend=> friend.id === selectFriend.id ?{...friend,balance:friend.balance+value} : friend ))
setSelectFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} onSelectFriend={handleSelectFriend} key={friends.id} selectFriend={selectFriend} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriends} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}{" "}
        </Button>
      </div>
      {selectFriend && <FormSplitBill selectFriend={selectFriend} onSplitBill={hanldeSplitBill}/>}
    </div>
  );
}

export default App;
