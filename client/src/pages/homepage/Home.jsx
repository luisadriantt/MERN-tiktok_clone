import React, { useEffect, useState } from "react";

import { FollowersColumn } from "../../components/followers-column/FollowersColumn";
import { SuggestedUsers } from "../../components/suggested-box/SuggestedUsers";
import { Card } from "../../components/cards/Card";

import { HomeContainer } from "./Home.styles";
import axios from "axios";

export const Home = () => {
  const [users, setUsers] = useState(null);
  let sortedUsers;
  let topFiveFollowing;
  let topFiveNotFollowing;

  useEffect(() => {
    const fetchData = async() => {
      const result = await axios.get("http://localhost:8001/tiktok/posts")
      setUsers(result.data)
    }
    fetchData()
  }, [])

  if(users) {
    sortedUsers = users.sort((a,b) => a.id < b.id ? 1 : -1)
    
    const following = users.filter(user => user.is_followed)
    const descendingFollowing = following.sort((a,b) => a.likes < b.likes ? 1 : -1)
    topFiveFollowing = descendingFollowing.slice(0,5)
    
    const notFollowing = users.filter(user => !user.is_followed)
    const descendingNotFollowing = notFollowing.sort((a,b) => a.likes < b.likes ? 1 : -1)
    topFiveNotFollowing = descendingNotFollowing.slice(0,5)
  }

  return (
    <>
    {sortedUsers && (
    <HomeContainer>
      <FollowersColumn users={topFiveFollowing} />
      <div>
        {sortedUsers.map((user, index) => (
          <Card key={index} user={user}/>
        ))}
      </div>
      <SuggestedUsers users={topFiveNotFollowing} />
    </HomeContainer>
    )}
    </>
  );
};
