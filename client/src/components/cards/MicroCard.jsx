import React from 'react'

import { Section } from '../suggested-box/SuggestedUsers.styles'
import { MicrocardContainer, UserProfile } from './Card.styles'

export const MicroCard = ({ user }) => {
  return (
    <Section>
        <MicrocardContainer>
            <UserProfile  src={user.avatar} width={'100%'} />
            <div>
                <h3 className="bold">{user.username}</h3>
                <p>{user.name}</p>
            </div>
        </MicrocardContainer>
    </Section>
  )
}
  