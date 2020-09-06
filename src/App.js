import React, { useState, useEffect } from 'react';
import './App.css';
import Heading from './components/Heading/Heading';
import Data from './Data/data.json';
import User from './components/User/User';
import SeeMore from './components/SeeMore/SeeMore';

function App() {
  const [data, setData] = useState([]);
  const [friends, setFriends] = useState([]);
  const [showFriend, setShowFriend] = useState(20);

  

  const seeMoreFriends = () => {
    setShowFriend(showFriend + 10);
    setData(Data.slice(0, showFriend));
  }

  useEffect(() => {
    setData(Data.slice(0, 10));
  }, []);


  const handelFriend = friend => {
    if (friends.indexOf(friend) === -1) {
      setFriends([...friends, friend]);
    } else {
      friends.splice(friends.indexOf(friend), 1);
      setFriends([...friends]);
    }
  }

  return (
    <div>
      <Heading
        friends={friends}
      ></Heading>
      {
        data.map(data => <User
          user={data}
          handelFunction={handelFriend}
        ></User>)
      }

      {
          <SeeMore
            length={data.length}
            function={seeMoreFriends}
          >See More</SeeMore>
      }

    </div>
  );
}

export default App;
