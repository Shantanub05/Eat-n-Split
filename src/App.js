import './index.css';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';


function App() {
  return (
    <div className='app'>
      <div className='sidebar'>
<FriendsList/>
<FormAddFriend/>

      </div>
    </div>
  );
}

export default App;
