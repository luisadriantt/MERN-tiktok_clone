import React, { useEffect, useState } from "react";

import { FollowersColumn } from "../../components/followers-column/FollowersColumn";
import { SuggestedUsers } from "../../components/suggested-box/SuggestedUsers";
import { Card } from "../../components/cards/Card";

import { HomeContainer } from "./Home.styles";
import axios from "axios";

export const Home = () => {
  const [users, setUsers] = useState(null);
  let sortedUsers;

  useEffect(() => {
    const fetchData = async() => {
      const result = await axios.get("http://localhost:8001/tiktok/posts")
      setUsers(result.data)
    }
    fetchData()
  }, [])

  if(users) {
    sortedUsers = users.sort((a,b) => a.likes > b.likes ? 1 : -1)
  }
  console.log(sortedUsers)

  return (
    <>
    {sortedUsers && (
    <HomeContainer>
      <FollowersColumn />
      <div>
        {sortedUsers.map((user, index) => (
          <Card key={index} user={user}/>
        ))}
      </div>
      <SuggestedUsers />
    </HomeContainer>
    )}
    </>
  );
};
