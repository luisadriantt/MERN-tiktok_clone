import React from 'react'

import { Section } from '../suggested-box/SuggestedUsers.styles'
import { MinicardContainer, UserProfile, FollowedButton, FollowButton } from './Card.styles'

export const MiniCard = ({ user, toggleFollow }) => {
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
             <FollowedButton>
               Following 
             </FollowedButton>
            ) :
            (
              <FollowButton>
                Follow
              </FollowButton>
            )
        }
      </MinicardContainer>
  )
}