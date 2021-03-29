import React from 'react'

import { BiCommentDots, BiHeart, BiShareAlt } from "react-icons/bi";

import { Break, Section } from '../suggested-box/SuggestedUsers.styles'
import { CardContainer, FollowButton,
     FollowedButton, Socials, UserInfoContainer,
      UserProfile, VideoContainer } from './Card.styles'

export const Card = ({ user, toggleFollow }) => {

  const timestamp = user.timestamp
  const timeStampReformat = timestamp.slice(2, 7)

  return (
    <CardContainer>
      <Break/>
        <Section>
          <UserInfoContainer>
            <UserProfile  src={user.avatar} width={'100%'} />
            <>
            <Section>
              <h3 className="bold">{user.username}</h3>
              <p className="username">{user.name}</p>
              <p>{timeStampReformat}</p>
            </Section> 
            <p>{user.caption}</p>
            </>
        {user.is_followed ?
            (
             <FollowedButton onClick={() => toggleFollow(user)}>
               Following 
             </FollowedButton>
            ) :
            (
              <FollowButton onClick={() => toggleFollow(user)}>
                Follow
              </FollowButton>
            )
        }
          </UserInfoContainer>
        </Section>
        <VideoContainer controls>
          <source src={user.video} type="video/mp4" />
        </VideoContainer>
          <Socials>
             <h3> <BiHeart />{user.likes} </h3>
             <h3>  <BiCommentDots />{user.comments}</h3>
             <BiShareAlt />
          </Socials>
    </CardContainer>
  )
}
