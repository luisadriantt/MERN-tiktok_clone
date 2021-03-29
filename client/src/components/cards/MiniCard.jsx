import React, { useContext } from 'react'

import { PostsContext } from '../context/PostsContext'

import { Section } from '../suggested-box/SuggestedUsers.styles'
import { MinicardContainer, UserProfile, FollowedButton, FollowButton } from './Card.styles'

export const MiniCard = ({ user }) => {
  const {updateFollow} = useContext(PostsContext)

  return (
      <MinicardContainer>
        <Section>
          <UserProfile  src={user.avatar} width={'100%'} />
          <div>
            <h3 className="bold">{user.username}</h3>
            <p>{user.name}</p>
          </div>
        </Section>
        {user.is_followed ?
            (
             <FollowedButton onClick={() => updateFollow(user)}>
               Following 
             </FollowedButton>
            ) :
            (
              <FollowButton onClick={() => updateFollow(user)}>
                Follow
              </FollowButton>
            )
        }
      </MinicardContainer>
  )
}