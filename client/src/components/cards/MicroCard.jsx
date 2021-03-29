import React from 'react'

import { MicrocardContainer, UserProfile } from './Card.styles'

export const MicroCard = ({ user }) => {
  return (
        <MicrocardContainer>
            <UserProfile  src={user.avatar} width={'100%'} />
            <div>
                <p>{user.name}</p>
            </div>
        </MicrocardContainer>
  )
}
  